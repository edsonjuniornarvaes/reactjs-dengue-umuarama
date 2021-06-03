/* ANCHOR: 📚 Lib imports. */
import * as Yup from "yup";

export const LoginValidationScheme = Yup.object().shape({
  email: Yup.string()
    .email("Formato de email inválido")
    .min(3, "Mínimo 3 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório."),
  password: Yup.string()
    .min(8, "Mínimo 8 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório."),
});
