export const languages = {
  en: "English",
  fr: "Français",
  "zh-cn": "中文",
} as const;

export type Locale = keyof typeof languages;

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    "site.title": "Test Site",
    "hello.world": "Hello World",
  },
  fr: {
    "site.title": "Site de test",
    "hello.world": "Bonjour le monde",
  },
  "zh-cn": {
    "site.title": "测试网站",
    "hello.world": "你好世界",
  },
};
