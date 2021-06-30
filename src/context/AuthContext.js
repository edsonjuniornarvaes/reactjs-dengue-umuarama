/* ANCHOR: 🧩 Standard imports. */
import { useState, createContext, useContext, useEffect } from "react";

/* ANCHOR: 📚 Lib imports. */
import Cookies from "js-cookie";

/* ANCHOR: 📡 Context creation. */
const Auth = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(() => {
    if (Cookies.getJSON("auth")) return Cookies.getJSON("auth");
    if (!Cookies.getJSON("auth")) return null;
  });
  const [handleCookie, setHandleCookie] = useState(() => {
    if (Cookies.getJSON("auth")) return Cookies.getJSON("auth");
    if (!Cookies.getJSON("auth")) return null;
  });

  useEffect(() => {
    const authCookie = Cookies.getJSON("auth");
    setHandleCookie(authCookie);
  }, []);

  useEffect(() => {
    if (handleCookie !== null) {
      setIsAuthorized(true);
    }

    if (handleCookie == null) {
      setIsAuthorized(false);
    }
  }, [handleCookie]);

  const value = {
    isAuthorized,
    setIsAuthorized,
  };

  return <Auth.Provider value={value}>{children}</Auth.Provider>;
}

export const useAuthContext = () => useContext(Auth);
