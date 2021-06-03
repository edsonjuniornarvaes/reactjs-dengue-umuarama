/* ANCHOR: 📚 Lib imports. */
import * as Yup from "yup";

export const ReportValidationScheme = Yup.object().shape({
  cep: Yup.string()
    .min(3, "Mínimo de 3 caracteres")
    .max(50, "Máximo de 50 caracteres")
    .required("Cep é obrigatório"),
  rua: Yup.string()
    .min(3, "Mínimo de 3 caracteres")
    .max(50, "Rua de 50 caracteres")
    .required("Rua é obrigatório"),
  numero: Yup.string()
    .min(3, "Mínimo de 3 caracteres")
    .max(10, "Máximo de 10 caracteres")
    .required("Número é obrigatório"),
  bairro: Yup.string()
    .min(3, "Mínimo de 3 caracteres")
    .max(50, "Máximo de 50 caracteres")
    .required("Bairro é obrigatório"),
  descricao: Yup.string()
    .min(10, "Mínimo de 10 caracteres")
    .max(200, "Máximo de 200 caracteres")
    .required("Descrição é obrigatório"),
});
