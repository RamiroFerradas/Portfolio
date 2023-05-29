"use client";
import { createContext, useState, useContext, useLayoutEffect } from "react";
import { translations } from "../translations";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("esp");
  const [text, setText] = useState(translations[language]);
  const [checked, setChecked] = useState(false);
  console.log(text);
  useLayoutEffect(() => {
    language === "esp" ? setChecked(false) : setChecked(true);
  }, [language]);

  const handleLanguage = (e) => {
    const checked = e.target.checked;

    if (!checked) {
      setLanguage("esp");
      setText(translations.esp);
    } else {
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
