import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslations from "../locales/en/common.json";
import esTranslations from "../locales/es/common.json";
import arTranslations from "../locales/ar/common.json";
import frTranslations from "../locales/fr/common.json";
import deTranslations from "../locales/de/common.json";
import zhTranslations from "../locales/zh/common.json";
import jaTranslations from "../locales/ja/common.json";
import ruTranslations from "../locales/ru/common.json";
import ptTranslations from "../locales/pt/common.json";
import hiTranslations from "../locales/hi/common.json";
import koTranslations from "../locales/ko/common.json";
import itTranslations from "../locales/it/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        common: enTranslations,
      },
      es: {
        common: esTranslations,
      },
      ar: {
        common: arTranslations,
      },
      fr: {
        common: frTranslations,
      },
      de: {
        common: deTranslations,
      },
      zh: {
        common: zhTranslations,
      },
      ja: {
        common: jaTranslations,
      },
      ru: {
        common: ruTranslations,
      },
      pt: {
        common: ptTranslations,
      },
      hi: {
        common: hiTranslations,
      },
      ko: {
        common: koTranslations,
      },
      it: {
        common: itTranslations,
      },
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
