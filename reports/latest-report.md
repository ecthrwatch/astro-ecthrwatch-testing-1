# Gloria Santona Timeline Event Migration Report

## Implementation Steps

### Step 11: Copy data files and create data loader
1. Installed `@astrojs/mdx` integration via `npx astro add mdx`
2. Installed `js-yaml` for YAML parsing
3. Copied 12 YAML data files from Hugo project (`DONT_DELETE_common_files/theme_eureka_1/data/`) into `src/data/`:
   - `dictionaries/{en,fr,zh}/email.yaml` — email header labels (From, Subject, To, etc.)
   - `dictionaries/{en,fr,zh}/original.yaml` — "Click to view original document" link prefixes
   - `persons/{en,fr,zh}/person.yaml` — 157/83/67 entries with markdown-formatted names and links
   - `signatures/{en,fr,zh}/signature-1-default.yaml` — LinkedIn + email contact blocks
4. Created `src/data/loader.ts` — unified data access layer:
   - `getDict(locale, file, key)` — dictionary lookup
   - `getPerson(locale, key)` — person entry lookup
   - `getOriginalText(locale, docType)` — original document prefix text
   - `getSignature(locale, key)` — signature block data
   - `renderInlineMarkdown(text)` — converts `[text](url)` markdown links in YAML values to HTML `<a>` tags
   - Locale mapping: our `zh-cn` maps to Hugo's `zh` directory names
   - File-level caching to avoid re-reading YAML on every component render

**Commit:** `[step-11] Copy Hugo data files and create data loader`

### Step 12: Create MDX components
Created 5 Astro components in `src/components/` replacing Hugo shortcodes:

| Component | Replaces | What it does |
|-----------|----------|-------------|
| `<Dict file="email" entry="from" />` | `{{< dict email from >}}` | Dictionary lookup, renders markdown |
| `<Person entry="rogalski_adam" />` | `{{< mydict2 person rogalski_adam >}}` | Person name/link lookup, renders markdown |
| `<Original lang="en" type="email" file="x.pdf" />` | `{{< original en email x.pdf >}}` | Renders "Click to view: [file](file)" link with localized prefix |
| `<ImgProc src="file.png" />` | `{{< imgproc2 file.png Fit "..." >}}` | Image display in centered `<figure>` with lazy loading |
| `<Signature />` | `{{< signature_shortcode_1_ >}}` | LinkedIn + email contact block from YAML data |

All components read locale from `Astro.locals.locale` (set by middleware).

**Commit:** `[step-12] Create MDX components: Dict, Person, Original, ImgProc, Signature`

### Step 13: Set up timeline content collection with Gloria Santona event
1. Created `src/content.config.ts` — defines `timeline` collection with Zod schema:
   - Required: `title`, `description`, `date`, `slug`
   - Optional: `lastmod`, `draft`, `authors`, `tags`, `timelines`, `featuredImage`, `translationKey`, `CONF_websites`, `toc`, `enableMath`
   - Uses `glob` loader pointing at `src/content/timeline/**/*.mdx`
2. Converted `index.en.md` from Hugo format to `src/content/timeline/2023-01-30-gloria-santona/index.mdx`:
   - Replaced all Hugo shortcodes with MDX component imports and JSX syntax
   - Converted `CONF_websites` from Hugo's multiline string to a space-separated string (schema: `z.string()`)
   - Converted `<br>` to self-closing `<br/>`
3. Copied all event assets (5 PNGs + 5 PDFs) into the content folder
4. Updated `src/middleware.ts` — added `SITE_DOMAIN` env var resolution (default: `ecthrwatch.org`)
5. Updated `src/env.d.ts` — added `siteDomain: string` to `App.Locals`

**Commit:** `[step-13] Set up timeline content collection with Gloria Santona event`

### Step 14: Create timeline list and event page routes
1. Created `src/pages/timeline-of-events-and-open-letters/index.astro` — timeline list page:
   - Fetches all events via `getCollection("timeline")`
   - Filters by `!draft` and `CONF_websites.includes(siteDomain)`
   - Sorts reverse chronologically
   - Renders as `<ol>` with red date + description (matching Hugo layout)
2. Created `src/pages/timeline-of-events-and-open-letters/[...slug].astro` — event detail page:
   - `getStaticPaths()` generates one route per event using the `slug` frontmatter field
   - Renders event title as `<h1>` + full MDX content via `<Content />`
   - Styled article container with blockquote and `<hr>` styling
3. Updated `src/pages/[slug].astro` — excluded `nav.timeline` from its `getStaticPaths()` since timeline now has its own dedicated route

**Commit:** `[step-14] Create timeline list and event page routes`

### Step 15: Add event assets to public directory
Copied all PNGs and PDFs to `public/timeline-of-events-and-open-letters/crucial-evidence-gloria-santona-contact-2016/` for static serving. Astro content collection files in `src/content/` are not served as static assets, so images and PDFs must also exist in `public/` at the URL path matching the page route.

**Commit:** `[step-15] Add event assets to public directory for static serving`

---

## Results

### Routes created
- `/timeline-of-events-and-open-letters/` — list page with SITE_DOMAIN filtering, reverse chronological
- `/timeline-of-events-and-open-letters/crucial-evidence-gloria-santona-contact-2016/` — full event page with rendered MDX content

### Verified working
- Person names render as clickable links (markdown-in-YAML pipeline works)
- Email metadata (From/Subject/To/Cc) displays correctly with Dict + Person components
- All 6 images load and render at correct dimensions (768px wide, constrained by max-width)
- PDF links are clickable
- `SITE_DOMAIN` filtering active (default: `ecthrwatch.org`)
- `npm run build:en` succeeds — 15 pages built in ~2s
- Pushed to GitHub, all 3 Amplify apps auto-building

### Key architectural decisions
- **SITE_DOMAIN env var** filters events by `CONF_websites` frontmatter — each Amplify app sets this to control which events appear
- **Content collection with glob loader** — events stored as MDX folders in `src/content/timeline/`, each with its own assets
- **Static asset duplication** — images/PDFs exist in both `src/content/` (for git tracking with the MDX) and `public/` (for serving). Future optimization: automate this copy step in the build pipeline.
- **Locale-to-directory mapping** — our `zh-cn` locale maps to Hugo's `zh` data directory names via `localeToDir` in the data loader
