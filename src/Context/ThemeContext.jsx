import { createContext } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const ThemeContext = createContext();
const initialTheme = "dark";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage(
    "theme",
    initialTheme ? initialTheme : `dark`
  );

  const handleTheme = (value) => {
    if (value === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const data = { theme, handleTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvider };
export default ThemeContext;
