import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

import Cookies from "js-cookie";

/* NOTE: Logout scheme.
-  ------------------*/
export default function Logout() {
  // const router = useRouter();
  const { isAuthorized, setIsAuthorized } = useGlobalContext();

  useEffect(() => {
    const userData = Cookies.getJSON("user");

    if (userData && userData.access_token) {
      Cookies.remove("user");
      setIsAuthorized(false);
    }
  }, []);

  useEffect(() => {
    // !isAuthorized && router.push("/auth/login");
  }, [isAuthorized]);

  return "";
}
