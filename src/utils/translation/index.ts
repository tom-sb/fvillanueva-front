import en from './en';
import es from './es';

export const translations = {
  en,
  es,
};

export type Translations = typeof translations;

export type Locale = keyof Translations;
