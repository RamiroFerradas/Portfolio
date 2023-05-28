"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { translations } from "../translations";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("language", "esp");
  const [text, setText] = useLocalStorage("text", translations[language]);
  const [checked, setChecked] = useLocalStorage("check", false);

  const handleLanguage = (e) => {
    const checked = e.target.checked;
    // console.log(checked);
    if (!checked) {
      setChecked(false);
      setLanguage("esp");
      setText(translations.esp);
    } else {
      setChecked(true);
      setLanguage("eng");
      setText(translations.eng);
    }
  };

  const data = { text, handleLanguage, language, checked };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export { LanguageProvider, useLanguage };
export default LanguageContext;
