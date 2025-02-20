import { createContext, useState, useEffect, useContext } from "react";
import i18n from "../utils/i18n"; // Import the i18n instance

// Create the context
const AppContext = createContext();

// Create a custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};

// Create the provider component
export function AppProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [currency, setCurrency] = useState("USD");
  const [theme, setTheme] = useState("light");
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    const savedCurrency = localStorage.getItem("currency") || "USD";
    const savedTheme = localStorage.getItem("theme") || "light";

    setLanguage(savedLang);
    setCurrency(savedCurrency);
    setTheme(savedTheme);
    setIsRTL(savedLang === "ar");
  }, []);

  const updateLanguage = (lang) => {
    setLanguage(lang);
    setIsRTL(lang === "ar");
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang); // Update the language in the i18n instance
  };

  const updateCurrency = (curr) => {
    setCurrency(curr);
    localStorage.setItem("currency", curr);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        currency,
        theme,
        isRTL,
        updateLanguage,
        updateCurrency,
        toggleTheme,
      }}
    >
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className={`${theme} ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        {children}
      </div>
    </AppContext.Provider>
  );
}
