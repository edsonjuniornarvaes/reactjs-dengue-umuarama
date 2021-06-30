/* ANCHOR: 🎨 Style imports. */
import { toast } from "react-toastify";

export async function ReportVerification(url, values) {
  console.log("values:", values);
  console.log("url:", url);

  return toast.success("Denúncia verificada com sucesso!");
}

/* NOTE: Request with axios and interceptors */

/* ANCHOR: 📨 Query imports. */
// import { api } from "../../../../../../services/interceptors";

// console.log("url:", url);

// return await api
//   .post(url, values)
//   .then((res) => {
//     toast.success("Denúncia verificada com sucesso!");
//     return res.data;
//   })
//   .catch((error) => {
//     toast.error(error.message);
//     throw new Error(error);
//   });
