import { defineMiddleware } from "astro:middleware";

/**
 * Dev-mode middleware that redirects "/" to the correct locale
 * based on the port number. This mimics the production subdomain
 * setup where each language has its own URL.
 *
 * Port mapping:
 *   4321 → /en/
 *   4322 → /fr/
 *   4323 → /zh-cn/
 */
const portToLocale: Record<number, string> = {
  4321: "/en/",
  4322: "/fr/",
  4323: "/zh-cn/",
};

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname === "/") {
    const port = context.url.port ? Number(context.url.port) : 4321;
    const locale = portToLocale[port];
    if (locale) {
      return context.redirect(locale);
    }
  }
  return next();
});
