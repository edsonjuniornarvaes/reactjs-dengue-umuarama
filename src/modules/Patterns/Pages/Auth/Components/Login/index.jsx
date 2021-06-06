/* ANCHOR: 🧩 Standard imports. */
import { useState } from "react";
import { useHistory } from "react-router-dom";

/* ANCHOR: 📦 Component imports. */
import { Input } from "../../../../Forms/Input";
import { TextAlert } from "../../../../../Components/Foundation/TextAlert";

/* ANCHOR: 📨 Query imports. */
import { SigIn } from "../../Api";

/* ANCHOR: 🎨 Style imports. */
import { BiChevronRight } from "react-icons/bi";
import { Spinner } from "react-bootstrap";

/* ANCHOR: 📝 Form imports. */
import { Formik, Form } from "formik";
import { LoginValidationScheme } from "./Scheme";
import { FormScheme } from "./FormScheme";
import { Alert } from "react-bootstrap";

export default function Login({ loginUrl }) {
  let history = useHistory();

  const [spinnerInButton, setSpinnerInButton] = useState(false);
  const [txtButton, setTxtButton] = useState("Entrar");
  const [error, setError] = useState(null);

  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (values) => {
    setSpinnerInButton(true);
    setTxtButton("Entrando");

    const data = FormScheme(values);

    const res = await SigIn(loginUrl, data);

    setTxtButton("Entrar");
    setSpinnerInButton(false);

    res === "success" &&
      setTimeout(() => {
        history.push("/");
      }, 500);

    res === "error" && setError("Usuário/Senha incorreto(s)");
  };

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        validationSchema={LoginValidationScheme}
        initialValues={initialValues}
      >
        {({ isValid }) => (
          <>
            <Form className="form form-label-right">
              {error && (
                <Alert variant="danger mb-10">
                  <TextAlert
                    customClassName="font-weight-bold"
                    alertSituation="error"
                  >
                    {error}
                  </TextAlert>
                </Alert>
              )}{" "}
              <div className="row">
                <div className="col-lg-12 form-group">
                  <Input type="email" label="Email" name="email" spantext="*" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 form-group">
                  <Input
                    type="password"
                    label="Senha"
                    name="password"
                    spantext="*"
                  />
                </div>
              </div>
              <footer
                className={
                  "form-group d-flex flex-wrap justify-content-between align-items-center"
                }
              >
                <a
                  href="/users/new"
                  className="text-hover-primary my-3 mr-2 text-muted"
                >
                  Novo usuário?
                </a>
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
    </>
  );
}
