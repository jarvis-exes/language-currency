import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{t("contact.title")}</h2>
      <p className="mt-2">{t("contact.phone")}</p>
    </div>
  );
};

export default Contact;
