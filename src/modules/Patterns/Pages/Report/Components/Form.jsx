/* ANCHOR: 🧩 Standard imports. */
import { useState } from "react";
import { useHistory } from "react-router-dom";

/* ANCHOR: 📦 Component imports. */
import { CardLayout } from "../../../../../modules/Patterns/Layout/Card";
import { Input } from "../../../../../modules/Patterns/Forms/Input";
import { Textarea } from "../../../../../modules/Patterns/Forms/Textarea";

/* ANCHOR: 📨 Query imports. */
import { ReportCreate } from "../Api";

/* ANCHOR: 🎨 Style imports. */
import { BiPlusCircle, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Spinner } from "react-bootstrap";

/* ANCHOR: 📝 Form imports. */
import { Formik, Form } from "formik";
import { ReportValidationScheme } from "./Scheme";
import { FormScheme } from "./FormScheme";

export default function ReportForm({ reportUrl }) {
  let history = useHistory();

  const [spinnerInButton, setSpinnerInButton] = useState(false);
  const [txtButton, setTxtButton] = useState("Salvar");

  const [initialValues, setInitialValues] = useState({
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    referencia: "",
    foto: "",
    descricao: "",
  });

  const onSubmit = async (values) => {
    setSpinnerInButton(true);
    setTxtButton("Salvando");

    console.log("imagem:", values.foto);

    const data = FormScheme(values);

    await ReportCreate(reportUrl, data)
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

  return (
    <>
      <CardLayout
        headerIcon={<BiPlusCircle color="#00aeff" size={20} />}
        headerTitle="Nova Denúncia"
        headerButtonTitle="Voltar"
        headerButtonIcon={<BiChevronLeft size={18} />}
        headerButtonHref="/"
      >
        <Formik
          onSubmit={onSubmit}
          enableReinitialize={true}
          validationSchema={ReportValidationScheme}
          initialValues={initialValues}
          validateOnMount={true}
        >
          {({ values, setFieldValue, isValid, dirty }) => (
            <>
              <Form className="form form-label-right">
                <div className="row">
                  <div className="col-lg-4 form-group">
                    <Input
                      type="text"
                      label="CEP"
                      name="cep"
                      mask="99999-999"
                      spantext="*"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <Input type="text" label="Rua" name="rua" spantext="*" />
                  </div>
                  <div className="col-lg-2 form-group">
                    <Input
                      type="text"
                      label="Número"
                      name="numero"
                      spantext="*"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 form-group">
                    <Input
                      type="text"
                      label="Bairro"
                      name="bairro"
                      spantext="*"
                    />
                  </div>
                  <div className="col-lg-4 form-group">
                    <Input type="text" label="Referência" name="referencia" />
                  </div>
                  <div className="col-lg-4 form-group">
                    <label>Foto</label>
                    <input
                      type="file"
                      className="form-control"
                      name="foto"
                      accept=".jpg, .jpeg, .png, .gif"
                      onChange={(e) => {
                        setFieldValue("foto", e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 form-group">
                    <Textarea
                      label="Descrição"
                      name="descricao"
                      spantext="*"
                      value={values.descricao != null ? values.descricao : ""}
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
