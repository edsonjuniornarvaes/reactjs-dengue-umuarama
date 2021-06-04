import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./theme/styles/globals.scss";
import "./theme/styles/patterns/layout/panel/panel.scss";
import "./theme/styles/patterns/layout/card/card.scss";
import "./theme/styles/patterns/forms/form.scss";
import "./theme/styles/all.scss";
import "./theme/styles/components/data-display/switch/toggle_switch.scss";

import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
