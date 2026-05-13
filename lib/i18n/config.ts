export const locales = ["zh-TW", "zh-CN"] as const;
export const defaultLocale = "zh-TW" as const;

export type Locale = (typeof locales)[number];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
