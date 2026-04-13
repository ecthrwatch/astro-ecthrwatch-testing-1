export const languages = {
  en: "English",
  fr: "Français",
  it: "Italiano",
  "zh-cn": "简体中文",
} as const;

export type Locale = keyof typeof languages;

export const siteUrls: Record<Locale, string> = {
  en: "https://astro-testing-1-en.ecthrwatch.org",
  fr: "https://astro-testing-1-fr.ecthrwatch.org",
  it: "https://it.ecthrwatch.org",
  "zh-cn": "https://astro-testing-1-zh.ecthrwatch.org",
};

export const devPorts: Record<Locale, number> = {
  en: 4321,
  fr: 4322,
  it: 4324,
  "zh-cn": 4323,
};

export const navKeys = [
  "nav.timeline",
  "nav.cia",
  "nav.china",
  "nav.legal",
  "nav.ai",
] as const;

export const navSlugs: Record<Locale, Record<string, string>> = {
  en: {
    "nav.timeline": "timeline-of-events-and-open-letters",
    "nav.cia": "cia-dod-and-other-foreign-intelligence-involvement",
    "nav.china": "torture-and-death-penalty-risks-in-china",
    "nav.legal": "ongoing-legal-proceedings",
    "nav.ai": "analyses-by-artificial-intelligence-confirming-mcdonalds-crimes",
  },
  fr: {
    "nav.timeline": "chronologie-des-faits-et-lettres-ouvertes",
    "nav.cia": "cia-et-implication-d-autres-services-de-renseignement-etrangers",
    "nav.china": "risques-de-torture-et-de-peine-de-mort-en-chine",
    "nav.legal": "procedures-judiciaires-en-cours",
    "nav.ai": "analyses-par-intelligence-artificielle-confirmant-les-fraudes-de-mcdonalds",
  },
  it: {
    "nav.timeline": "cronologia-degli-eventi-e-lettere-aperte",
    "nav.cia": "cia-e-coinvolgimento-di-servizi-di-intelligence-stranieri",
    "nav.china": "rischi-di-tortura-e-pena-di-morte-in-cina",
    "nav.legal": "procedimenti-giudiziari-in-corso",
    "nav.ai": "analisi-di-intelligenza-artificiale-che-confermano-i-crimini-di-mcdonalds",
  },
  "zh-cn": {
    "nav.timeline": "shishi-jingguo-yu-gongkaixin-shijianxian",
    "nav.cia": "cia-mi6-ji-faguo-qingbao-jigou-canyu",
    "nav.china": "xingxun-yu-sixing-fengxian-zai-zhongguo",
    "nav.legal": "zhengzai-jinxing-de-falu-chengxu",
    "nav.ai": "rengong-zhineng-fenxi-queren-maidanglao-fanzui",
  },
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

    "page.timeline": "Timeline of Events and Open Letters",
    "page.cia": "CIA, DoD, and Other Foreign Intelligence Involvement",
    "page.china": "Torture and Death Penalty Risks in China",
    "page.legal": "Ongoing Legal Proceedings",
    "page.ai": "Analyses by Artificial Intelligence Confirming McDonald's Crimes",

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

    "page.timeline": "Chronologie des faits et lettres ouvertes",
    "page.cia": "CIA et implication d'autres services de renseignement étrangers",
    "page.china": "Risques de torture et de peine de mort en Chine",
    "page.legal": "Procédures judiciaires en cours",
    "page.ai": "Analyses par intelligence artificielle confirmant les fraudes de McDonald's",

    "theme.light": "Mode jour",
    "theme.dark": "Mode nuit",
    "theme.auto": "Mode automatique",

    "footer.copyright.name": "Vincent Le Corre",
    "footer.copyright.url": "https://www.linkedin.com/in/x-v-france/",
  },
  it: {
    "site.title": "ECTHRwatch.org",
    "site.org": "European Court of Human Rights Watch",

    "nav.timeline": "Cronologia e Lettere Aperte",
    "nav.cia": "CIA e Intelligence Straniera",
    "nav.china": "Rischi di Pena di Morte in Cina",
    "nav.legal": "Procedimenti Giudiziari",
    "nav.ai": "Analisi tramite IA",

    "page.timeline": "Cronologia degli eventi e lettere aperte",
    "page.cia": "CIA e coinvolgimento di altri servizi di intelligence stranieri",
    "page.china": "Rischi di tortura e pena di morte in Cina",
    "page.legal": "Procedimenti giudiziari in corso",
    "page.ai": "Analisi di intelligenza artificiale che confermano i crimini di McDonald's",

    "theme.light": "Chiaro",
    "theme.dark": "Scuro",
    "theme.auto": "Automatico",

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

    "page.timeline": "事实经过与公开信时间线",
    "page.cia": "CIA、MI6及法国情报机构参与",
    "page.china": "刑讯与死刑风险在中国",
    "page.legal": "正在进行的法律程序",
    "page.ai": "人工智能分析确认麦当劳犯罪",

    "theme.light": "浅色",
    "theme.dark": "深色",
    "theme.auto": "自动",

    "footer.copyright.name": "陆圣乔",
    "footer.copyright.url": "https://www.lushengqiao.com/",
  },
};
