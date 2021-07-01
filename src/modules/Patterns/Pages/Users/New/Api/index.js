/* ANCHOR: 🎨 Style imports. */
import { toast } from "react-toastify";

export async function UserCreate(url, values) {
  console.log("url", url);
  console.log("values", values);
  toast.success("Usuário cadastrado com sucesso!");
}

/* NOTE: Request with axios and interceptors */

/* ANCHOR: 📨 Query imports. */
// import { api } from "../../../../../../services/interceptors";

// for (var pair of values.entries()) {
//   console.log(pair[0] + ", " + pair[1]);
// }
// return await api
//   .post(url, values)
//   .then((res) => {
//     toast.success("Usuário cadastrado com sucesso!");
//     return res.data;
//   })
//   .catch((error) => {
//     toast.error(error.message);
//     throw new Error(error);
//   });
