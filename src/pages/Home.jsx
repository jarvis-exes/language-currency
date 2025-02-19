import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t("home.welcome")}</h1>
        <p className="text-lg mb-8">{t("home.description")}</p>
        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {t("home.cta")}
        </Link>
      </div>
    </div>
  );
};

export default Home;
