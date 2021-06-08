/* ANCHOR: 📚 Lib imports. */
import * as Yup from "yup";

export const ValidationSchema = () => {
  const params = {
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
  };
  return Yup.object().shape({ params });
};

export const FormSchema = (values) => {
  let data = new FormData();

  data.append("cep", values.cep);
  data.append("rua", values.rua);
  data.append("numero", values.numero);
  data.append("bairro", values.bairro);
  data.append("referencia", values.referencia);
  data.append("foto", values.foto);
  data.append("descricao", values.descricao);

  return data;
};
