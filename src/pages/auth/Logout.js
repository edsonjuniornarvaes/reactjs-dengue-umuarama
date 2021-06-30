/* ANCHOR: 🧩 Standard imports. */
import { useEffect } from "react";

/* ANCHOR: 📚 Lib imports. */
import Cookies from "js-cookie";

/* ANCHOR: 📨 Query imports. */
import { useAuthContext } from "../../context/AuthContext";

export default function Logout() {
  const { setIsAuthorized } = useAuthContext();

  useEffect(() => {
    Cookies.remove("auth");
    setIsAuthorized(false);
  }, [setIsAuthorized]);

  return "";
}
