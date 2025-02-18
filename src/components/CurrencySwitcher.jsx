import React, { useState, useEffect } from "react";

const currencies = ["USD", "EUR", "GBP", "JPY", "INR", "AUD"];

const CurrencySwitcher = ({ onCurrencyChange }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  useEffect(() => {
    const storedCurrency = localStorage.getItem("currency");
    if (storedCurrency) {
      setSelectedCurrency(storedCurrency);
    }
  }, []);

  const handleCurrencyChange = (e) => {
    const currency = e.target.value;
    setSelectedCurrency(currency);
    localStorage.setItem("currency", currency);
    onCurrencyChange(currency);
  };

  return (
    <select
      value={selectedCurrency}
      onChange={handleCurrencyChange}
      className="p-2 border rounded"
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default CurrencySwitcher;
