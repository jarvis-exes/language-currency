import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { t } = useTranslation("common");
  const { theme, isRTL } = useAppContext();

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
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
