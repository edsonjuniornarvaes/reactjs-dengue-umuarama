/* ANCHOR: 📚 Lib imports. */
import * as Yup from "yup";

export const ValidationSchema = () => {
  const params = {
    address_zipcode: Yup.string()
      .min(3, "Mínimo de 3 caracteres")
      .max(50, "Máximo de 50 caracteres")
      .required("add é obrigatório")
      .nullable(),
    address_street: Yup.string()
      .min(3, "Mínimo de 3 caracteres")
      .max(50, "Máximo de 50 caracteres")
      .required("Rua é obrigatório")
      .nullable(),
      address_number: Yup.string()
      .min(3, "Mínimo de 3 caracteres")
      .max(10, "Máximo de 10 caracteres")
      .required("Número é obrigatório")
      .nullable(),
      address_district: Yup.string()
      .min(3, "Mínimo de 3 caracteres")
      .max(50, "Máximo de 50 caracteres")
      .required("Bairro é obrigatório")
      .nullable(),
    description: Yup.string()
      .min(10, "Mínimo de 10 caracteres")
      .max(200, "Máximo de 200 caracteres")
      .required("Descrição é obrigatório")
      .nullable(),

  };
  return Yup.object().shape( params );
};

export const FormSchema = (values, user) => {
  let data = new FormData();

  console.log(values.user)
  console.log(user.email)

  data.append("address_zipcode", values.address_zipcode);
  data.append("address_street", values.address_street);
  data.append("address_number", values.address_number);
  data.append("address_district", values.address_district);
  data.append("address_reference", values.address_reference);
  data.append("photo", values.photo);
  data.append("user", values.user ? 'Anônimo' : user.email);
  data.append("description", values.description);

  return data;
};
