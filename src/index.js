import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./theme/styles/globals.scss";
import "./theme/styles/panel/panel.scss";
import "./theme/styles/all.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
