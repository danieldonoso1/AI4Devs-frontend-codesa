import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import esTranslations from './locales/es/translation.json';
import papTranslations from './locales/pap/translation.json';

declare module 'i18next' {
  interface TFunction {
    (key: string, options?: { score?: number }): string;
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: esTranslations
      },
      pap: {
        translation: papTranslations
      }
    },
    fallbackLng: 'es',
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 