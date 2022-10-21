import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "./Context/ThemeContext";
import { LanguajeProvider } from "./Context/LanguajeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <LanguajeProvider>
      <App />
    </LanguajeProvider>
  </ThemeProvider>
);
