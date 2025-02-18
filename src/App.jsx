import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import "./App.css";
import LanguageSwitcher from "./components/LanguageSwitcher";
import CurrencySwitcher from "./components/CurrencySwitcher";
import ProductPage from "./components/ProductPage";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import enMessages from "./i18n/locales/en.json";
import esMessages from "./i18n/locales/es.json";
import frMessages from "./i18n/locales/fr.json";
import deMessages from "./i18n/locales/de.json";

function App() {
  const [currency, setCurrency] = useState("USD");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [locale, setLocale] = useState(
    localStorage.getItem("language") || "en"
  );
  const [messages, setMessages] = useState(enMessages); // Default language messages

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Update locale and language messages
  const handleLanguageChange = (newLang) => {
    setLocale(newLang);
    localStorage.setItem("language", newLang);
    switch (newLang) {
      case "en":
        setMessages(enMessages);
        break;
      case "es":
        setMessages(esMessages);
        break;
      case "fr":
        setMessages(frMessages);
        break;
      case "de":
        setMessages(deMessages);
        break;
      default:
        setMessages(enMessages);
    }
  };

  // Handle currency change
  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <Router>
      <IntlProvider locale={locale} messages={messages}>
        <div className="App">
          <header className="flex justify-between p-4 bg-gray-800 text-white">
            <div>
              <LanguageSwitcher onLanguageChange={handleLanguageChange} />
            </div>
            <div>
              <CurrencySwitcher onCurrencyChange={handleCurrencyChange} />
            </div>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-500"
            >
              Toggle Theme
            </button>
          </header>

          <main className="container mx-auto p-6">
            <Routes>
              {/* Define your routes here */}
              <Route path="/" element={<ProductPage currency={currency} />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </IntlProvider>
    </Router>
  );
}

export default App;
