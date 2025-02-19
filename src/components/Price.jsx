import { useAppContext } from "../context/AppContext";

const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.73,
  JPY: 110,
  INR: 75,
  AUD: 1.33,
  CAD: 1.25,
  CHF: 0.92,
  CNY: 6.45,
  RUB: 75,
  KRW: 1180,
  BRL: 5.25,
};

const Price = ({ value }) => {
  const { currency, language } = useAppContext();

  const formatter = new Intl.NumberFormat(language, {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
  });

  return <span>{formatter.format(value * exchangeRates[currency])}</span>;
};

export default Price;
