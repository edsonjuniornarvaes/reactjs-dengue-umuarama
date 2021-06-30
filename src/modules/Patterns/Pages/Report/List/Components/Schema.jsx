/* ANCHOR: 📚 Lib imports. */
import * as Yup from "yup";

export const ValidationSchema = () => {
  const params = {
    verification: Yup.string()
      .min(8, "Mínimo de 8 caracteres")
      .max(50, "Máximo de 50 caracteres")
      .required("Relatar verificação é obrigatório para fechar uma denúncia!")
      .nullable(),
  };
  return Yup.object().shape(params);
};

export const FormSchema = (values, user) => {
  return JSON.parse(
    JSON.stringify({
      verification: values.verification,
      user: user.email,
    })
  );
};
