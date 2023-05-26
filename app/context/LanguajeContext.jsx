"use client";
import { createContext, useState, useContext } from "react";
import { translations } from "../translations/Translations";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LanguageContext = createContext();
const initialLanguage = "esp";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage(
    "language",
    initialLanguage ? initialLanguage : "esp"
  );
  const [text, setText] = useState(translations[language]);
  const [check, setChecked] = useLocalStorage("check", false);

  const handleLanguage = (e) => {
    console.log(text);
    if (!e.target.checked) {
      setLanguage("esp");
      setText(translations.esp);
      setChecked(false);
    } else {
      setLanguage("eng");
      setText(translations.eng);
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
