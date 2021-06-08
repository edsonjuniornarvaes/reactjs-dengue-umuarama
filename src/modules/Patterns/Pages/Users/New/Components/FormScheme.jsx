/* ANCHOR: 📝 Form imports. */
import { OnlyNumbers } from "../../../../../../utils/format";

export const FormScheme = (values) => {
  return JSON.parse(
    JSON.stringify({
      name: values.name,
      cpf: OnlyNumbers(values.cpf),
      email: values.email,
      phone: OnlyNumbers(values.phone),
      password: values.password,
      password_confirmation: values.password_confirmation,
    })
  );
};
