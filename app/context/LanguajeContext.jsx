"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { translations } from "../translations";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("language", "esp");
  const [text, setText] = useLocalStorage("text", "");
  const [check, setChecked] = useLocalStorage("check", false);

  useEffect(() => {
    setText(translations[language]);
  }, [language]);

  const handleLanguage = (e) => {
    if (!e.target.checked) {
      setLanguage("esp");
      setChecked(false);
    } else {
      setLanguage("eng");
      setChecked(true);
    }
  };

  const data = { text, handleLanguage, language, check };

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
