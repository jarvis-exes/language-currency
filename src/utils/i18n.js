import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import enTranslations from "../public/locales/en/common.json";
import esTranslations from "../public/locales/es/common.json";
import arTranslations from "../public/locales/ar/common.json";

// Configure i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    fallbackLng: "en", // Fallback language
    debug: process.env.NODE_ENV === "development", // Enable debug mode in development
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      en: {
        translation: enTranslations, // English translations
      },
      es: {
        translation: esTranslations, // Spanish translations
      },
      ar: {
        translation: arTranslations, // Arabic translations
      },
      // Add more languages here
    },
    detection: {
      order: ["localStorage", "navigator"], // Detect language from localStorage and browser
      caches: ["localStorage"], // Cache the detected language in localStorage
    },
  });

export default i18n;
