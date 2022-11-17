import { createContext, useState } from "react";
import { translations } from "../Translations/Translations";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const LanguajeContext = createContext();
const initialLanguaje = "esp";

const LanguajeProvider = ({ children }) => {
  const [languaje, setLanguaje] = useLocalStorage(
    "languaje",
    initialLanguaje ? initialLanguaje : `esp`
  );
  const [text, setText] = useState(translations[languaje]);
  const [check, setCheked] = useLocalStorage("check", false);

  const handleLanguage = (e) => {
    if (!e.target.checked) {
      setLanguaje("esp");
      setText(translations.esp);
      setCheked(false);
    } else {
      setLanguaje("eng");
      setText(translations.eng);
      setCheked(true);
    }
  };

  const data = { text, handleLanguage, languaje, check };

  return (
    <LanguajeContext.Provider value={data}>{children}</LanguajeContext.Provider>
  );
};
export { LanguajeProvider };
export default LanguajeContext;
