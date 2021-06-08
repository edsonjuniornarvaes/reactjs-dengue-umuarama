/* ANCHOR: 🧩 Standard imports. */
import { useState } from "react";
import { useHistory } from "react-router-dom";

/* ANCHOR: 📦 Component imports. */
import { CardLayout } from "../../../../Layout/Card";
import { Input } from "../../../../Forms/Input";

/* ANCHOR: 📨 Query imports. */
import { UserCreate } from "../Api";

/* ANCHOR: 🎨 Style imports. */
import { BiUserCircle, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Spinner } from "react-bootstrap";

/* ANCHOR: 📝 Form imports. */
import { Formik, Form } from "formik";
import { ValidationSchema, FormSchema } from "./Schema";
import { CpfVerify } from "../../../../../../utils/validation";
import { PhoneFormat } from "../../../../../../utils/format";

export default function UserForm({ userUrl }) {
  let history = useHistory();

  const [spinnerInButton, setSpinnerInButton] = useState(false);
  const [txtButton, setTxtButton] = useState("Salvar");

  const [initialValues, setInitialValues] = useState({
    name: "",
    cpf: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const onSubmit = async (values) => {
    setSpinnerInButton(true);
    setTxtButton("Salvando");

    const data = FormSchema(values);

    await UserCreate(userUrl, data)
      .then((res) => {
        setTxtButton("Salvar");
        setSpinnerInButton(false);

        setTimeout(() => {
          history.push("/");
        }, 500);
      })
      .catch(() => {
        setTxtButton("Salvar");
        setSpinnerInButton(false);
      });
  };

  const HandleCnpjVerify = async (e) => {
    if (e.target.value && e.target.value != "") {
      const data = await CpfVerify(e.target.value);

      if (data == "invalid") return "invalid";

      return "valid";
    }
  };

  return (
    <>
      <CardLayout
        headerIcon={<BiUserCircle color="#00aeff" size={20} />}
        headerTitle="Novo Usuário"
        headerButtonTitle="Voltar"
        headerButtonIcon={<BiChevronLeft size={18} />}
        headerButtonHref="/"
      >
        <Formik
          onSubmit={onSubmit}
          enableReinitialize={true}
          validationSchema={ValidationSchema}
          initialValues={initialValues}
          validateOnMount={true}
        >
          {({ values, setFieldValue, isValid, dirty }) => (
            <>
              <Form className="form form-label-right">
                <div className="row">
                  <div className="col-lg-6 form-group">
                    <Input
                      type="text"
                      label="Nome"
                      name="name"
                      placeholder="Nome"
                      spantext="*"
                    />
                  </div>
                  <div className="col-lg-2 form-group">
                    <Input
                      type="text"
                      id="cpf"
                      label="CPF"
                      name="cpf"
                      placeholder="CPF"
                      mask="999.999.999-99"
                      spantext="*"
                      onBlur={async (e) => {
                        const data = e != "" && (await HandleCnpjVerify(e));
                        if (data === "valid") {
                          setFieldValue("cpf", e.target.value);
                        }
                        if (data === "invalid") {
                          setFieldValue("cpf", "");
                        }
                      }}
                    />
                  </div>
                  <div className="col-lg-4 form-group">
                    <Input
                      type="text"
                      label="Telefone"
                      name="phone"
                      placeholder="Telefone"
                      spantext="*"
                      addonText="+55"
                      onBlur={PhoneFormat}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 form-group">
                    <Input
                      type="email"
                      id="email"
                      label="Email"
                      name="email"
                      placeholder="Email"
                      spantext="*"
                    />
                  </div>
                  <div className="col-lg-4 form-group">
                    <Input
                      type="text"
                      id="password"
                      label="Senha"
                      name="password"
                      placeholder="Senha"
                      spantext="*"
                    />
                  </div>
                  <div className="col-lg-4 form-group">
                    <Input
                      type="text"
                      id="password_confirmation"
                      label="Confirmar Senha"
                      name="password_confirmation"
                      placeholder="Confirmar Senha"
                      spantext="*"
                    />
                  </div>
                </div>
                <footer className={"d-flex justify-content-end"}>
                  <button
                    type="button"
                    onClick={() => history.push("/")}
                    className="btn btn-light btn-elevate mr-5 font-weight-bold text-dark-60"
                  >
                    <BiChevronLeft size={18} />
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary btn-elevate font-weight-bold"
                    disabled={!isValid}
                  >
                    {txtButton}
                    <BiChevronRight size={18} />
                    {spinnerInButton && (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="ml-2"
                      />
                    )}
                  </button>
                </footer>
              </Form>
            </>
          )}
        </Formik>
      </CardLayout>
    </>
  );
}
