import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{t("about.title")}</h2>
      <p className="mt-2">{t("about.content")}</p>
    </div>
  );
};

export default AboutUs;
