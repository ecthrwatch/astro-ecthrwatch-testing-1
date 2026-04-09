export const languages = {
  en: "English",
  fr: "Français",
  "zh-cn": "简体中文",
} as const;

export type Locale = keyof typeof languages;

export const siteUrls: Record<Locale, string> = {
  en: "https://astro-testing-1-en.ecthrwatch.org",
  fr: "https://astro-testing-1-fr.ecthrwatch.org",
  "zh-cn": "https://astro-testing-1-zh.ecthrwatch.org",
};

export const devPorts: Record<Locale, number> = {
  en: 4321,
  fr: 4322,
  "zh-cn": 4323,
};

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    "site.title": "ECTHRwatch.org",
    "site.org": "European Court of Human Rights Watch",

    "nav.timeline": "Timeline & Open Letters",
    "nav.cia": "CIA & Foreign Intel",
    "nav.china": "Death Penalty Risks in China",
    "nav.legal": "Legal Proceedings",
    "nav.ai": "Analyses by AI",

    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.auto": "Auto",

    "footer.copyright.name": "Vincent Le Corre",
    "footer.copyright.url": "https://www.linkedin.com/in/x-v-france/",
  },
  fr: {
    "site.title": "ECTHRwatch.org",
    "site.org": "European Court of Human Rights Watch",

    "nav.timeline": "Chronologie et Lettres Ouvertes",
    "nav.cia": "CIA, DGSE, et autres",
    "nav.china": "Risques de Peine de Mort en Chine",
    "nav.legal": "Procédures Judiciaires",
    "nav.ai": "Analyses par IA",

    "theme.light": "Mode jour",
    "theme.dark": "Mode nuit",
    "theme.auto": "Mode automatique",

    "footer.copyright.name": "Vincent Le Corre",
    "footer.copyright.url": "https://www.linkedin.com/in/x-v-france/",
  },
  "zh-cn": {
    "site.title": "ECTHRwatch.org",
    "site.org": "European Court of Human Rights Watch",

    "nav.timeline": "事实经过与公开信时间线",
    "nav.cia": "CIA、MI6与法国情报参与",
    "nav.china": "刑讯与死刑风险在中国",
    "nav.legal": "正在进行的司法程序",
    "nav.ai": "人工智能分析",

    "theme.light": "浅色",
    "theme.dark": "深色",
    "theme.auto": "自动",

    "footer.copyright.name": "陆圣乔",
    "footer.copyright.url": "https://www.lushengqiao.com/",
  },
};
