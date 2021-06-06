/* ANCHOR: 📚 Lib imports. */
import * as Yup from "yup";

export const UserValidationScheme = Yup.object().shape({
  cpf: Yup.string()
    .min(14, "Mínimo de 14 caracteres")
    .required("CPF é obrigatório")
    .nullable(),
  name: Yup.string()
    .min(3, "Mínimo de 3 caracteres")
    .required("Nome é obrigatório")
    .max(50, "Máximo de 50 caracteres")
    .nullable(),
  phone: Yup.string().required("Telefone é obrigatório").nullable(),
  email: Yup.string()
    .email("Formato de email inválido")
    .min(3, "Mínimo 3 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Email é obrigatório.")
    .nullable(),
  password: Yup.string()
    .min(8, "Mínimo 8 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Senha é obrigatório."),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "As senhas não coincidem"
  ),
});
