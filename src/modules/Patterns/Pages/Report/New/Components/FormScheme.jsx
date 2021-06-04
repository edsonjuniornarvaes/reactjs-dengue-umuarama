export const FormScheme = (values) => {
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
