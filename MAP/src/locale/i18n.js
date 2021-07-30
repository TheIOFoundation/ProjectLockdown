import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// import translationEN from './en/index';
import translationAR from './ar/index';
import translationES from './es/index';
import translationIT from './it/index';
import translationPT from './pt/index';
import translationRU from './ru/index';
import translationZHCN from './zh-CN/index';
import translationZHHK from './zh-HK/index';
const translationEN = require('./en/en.json');

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
  ar: {
    translation: translationAR,
  },
  it: {
    translation: translationIT,
  },
  pt: {
    translation: translationPT,
  },
  ru: {
    translation: translationRU,
  },
  zhCN: {
    translation: translationZHCN,
  },
  zhHK: {
    translation: translationZHHK,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
