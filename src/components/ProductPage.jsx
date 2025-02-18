import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IntlProvider, FormattedNumber } from "react-intl";

const ProductPage = ({ currency }) => {
  const { t } = useTranslation();
  const [product, setProduct] = useState({
    name: t("product.name"),
    description: t("product.description"),
    price: 100, // Default price in USD
  });

  useEffect(() => {
    if (currency === "EUR") {
      setProduct({ ...product, price: 85 });
    } else if (currency === "GBP") {
      setProduct({ ...product, price: 75 });
    }
  }, [currency, t]);

  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg dark:text-white">
      <h1 className="text-xl font-bold">{product.name}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="mt-4 text-lg">
        <FormattedNumber
          value={product.price}
          style="currency"
          currency={currency}
        />
      </p>
    </div>
  );
};

export default ProductPage;
