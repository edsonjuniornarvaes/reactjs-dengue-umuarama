export const FormScheme = (values) => {
  const data = JSON.parse(
    JSON.stringify({
      email: values.email,
      password: values.password,
    })
  );

  return data;
};
