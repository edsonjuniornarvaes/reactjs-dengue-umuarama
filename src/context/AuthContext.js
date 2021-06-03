/* SECTION: Standard imports. */
import { useState, createContext, useContext, useEffect } from "react";

/* SECTION: Lib imports. */
import Cookies from "js-cookie";

/* SECTION: Context creation. */
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

  let authCookie = null;

  useEffect(() => {
    authCookie = Cookies.getJSON("auth");
    setHandleCookie(authCookie);
  }, []);

  useEffect(() => {
    if (handleCookie != null) {
      setIsAuthorized(true);
    }

    if (handleCookie == null) {
      setIsAuthorized(false);
    }
  }, []);

  const value = {
    isAuthorized,
    setIsAuthorized,
  };

  return <Auth.Provider value={value}>{children}</Auth.Provider>;
}

export const useAuthContext = () => useContext(Auth);
