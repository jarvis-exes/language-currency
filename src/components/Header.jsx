import { useAppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "ar", name: "Arabic" },
  // Add other languages
];

const CURRENCIES = [
  "USD",
  "EUR",
  "GBP",
  "JPY",
  "INR",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "RUB",
  "KRW",
  "BRL",
];

const Header = () => {
  const {
    language,
    currency,
    updateLanguage,
    updateCurrency,
    toggleTheme,
    theme,
  } = useAppContext();
  const { t } = useTranslation("common");

  return (
    <header className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">{t("header.title")}</h1>
      <div className="flex gap-4">
        <select
          value={language}
          onChange={(e) => updateLanguage(e.target.value)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>

        <select
          value={currency}
          onChange={(e) => updateCurrency(e.target.value)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {CURRENCIES.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>

        <button onClick={toggleTheme} className="p-2 bg-blue-500 rounded">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};

export default Header;
