import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { fetchEnvironments } from "../api";

// import translationEN from './en/index';
import translationAR from './ar/index';
import translationES from './es/index';
import translationIT from './it/index';
import translationPT from './pt/index';
import translationRU from './ru/index';
import translationZHCN from './zh-CN/index';
import translationZHHK from './zh-HK/index';
let translationEN = require('./en/en.json');

async function getEnv() {
    const data = await fetchEnvironments();
    const dsl_id = data.environment.dsl_id;
    console.log(dsl_id);
    switch(dsl_id) {
        case 1:
            translationEN = { ...translationEN, ...require('./en/covid19.json') };
    }
}

getEnv().then(() => {
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
});

export default i18n;
