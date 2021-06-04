/* ANCHOR: 📚 Lib imports. */
import Cookies from "js-cookie";

/* ANCHOR: 📨 Query imports. */
import { api } from "../../../../../services/interceptors";

/* ANCHOR: 🎨 Style imports. */
import { toast } from "react-toastify";

export async function SigIn(url, values) {
  console.log("url:", url);

  if (values.email && values.email !== "user@gmail.com") {
    return "error";
  }
  if (values.password.length >= 4 && values.password !== "123password") {
    return "error";
  }

  Cookies.set("auth", JSON.stringify(true));

  return "success";

  return await api
    .post(url, values)
    .then((res) => {
      toast.success("Denúncia feita com sucesso!");
      return res.data;
    })
    .catch((error) => {
      toast.error(error.message);
      throw new Error(error);
    });
}
