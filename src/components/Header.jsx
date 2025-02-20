import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "ar", name: "Arabic" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "zh", name: "Chinese" },
  { code: "ja", name: "Japanese" },
  { code: "ru", name: "Russian" },
  { code: "pt", name: "Portuguese" },
  { code: "hi", name: "Hindi" },
  { code: "ko", name: "Korean" },
  { code: "it", name: "Italian" },
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
    <header className="p-4 bg-violet-600 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        My App
      </Link>
      <div>
        <Link to="/contact" className="text-xl font-bold m-10">
          Contact Us
        </Link>
        <Link to="/about" className="text-xl font-bold m-10">
          About
        </Link>
      </div>

      <div className="flex gap-4">
        <select
          value={language}
          onChange={(e) => updateLanguage(e.target.value)}
          className="bg-violet-900 text-white p-2 rounded"
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
          className="bg-violet-900 text-white p-2 rounded"
        >
          {CURRENCIES.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>

        <button onClick={toggleTheme} className="p-2 bg-violet-900 rounded">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};

export default Header;
