import * as translations from '../lang';

export function getTranslations(page: Page, lang: Locale = 'en') {  
  const pageTranslations = translations[lang];
  return pageTranslations.default[page];
}

export function getLanguage() {
  return 'en';
}

export function setLanguage(lang: Locale) {
  return 'en';
}

export type Page = 'camera' | 'review';
export type Locale = 'de' | 'en';
export const locales: Locale[] = ['de', 'en'] as const;