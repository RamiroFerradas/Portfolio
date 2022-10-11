import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";
import axios from "axios";
// import dotenv from "dotenv";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-mp-bx1eb.us.auth0.com"
    clientId="Z0yFy4SxEZTYErE6Lji63C3bdWsmtWGK"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
