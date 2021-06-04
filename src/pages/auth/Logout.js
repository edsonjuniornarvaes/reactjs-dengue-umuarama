/* SECTION: Lib imports. */
import Cookies from "js-cookie";

/* SECTION: Query imports. */
import { useAuthContext } from "../../context/AuthContext";

export default function Logout() {
  const { setIsAuthorized } = useAuthContext();

  Cookies.remove("auth");
  setIsAuthorized(false);

  return "";
}
