/* ANCHOR: 🎨 Style imports. */
import { toast } from "react-toastify";

export async function ReportSituation(url, action) {
  console.log("url:", url);

  if (action && action === "activate") {
    return toast.success("Denúncia verificada com sucesso!");
  }
  if (action && action === "inactivate") {
    return toast.warning("Atenção! Verificação retirada");
  }
}

/* NOTE: Request with axios and interceptors */

/* ANCHOR: 📨 Query imports. */
// import { api } from "../../../../../../services/interceptors";

// return await api
//   .patch(url)
//   .then((res) => {
//     toast.success("Denúncia verificada com sucesso!");
//     return res.data;
//   })
//   .catch((error) => {
//     toast.error(error.message);
//     throw new Error(error);
//   });
