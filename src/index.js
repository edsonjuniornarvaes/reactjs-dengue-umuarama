import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./theme/styles/globals.scss";
import "./theme/styles/panel/panel.scss";
import "./theme/styles/all.scss";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
