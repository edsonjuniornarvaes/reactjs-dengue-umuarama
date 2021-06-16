/* ANCHOR: 🧩 Standard imports. */
import { useState } from "react";
import { useHistory } from "react-router-dom";

/* ANCHOR: 📚 Lib imports. */
import Cookies from "js-cookie";

/* ANCHOR: 📦 Component imports. */
import { CardLayout } from "../../../../../../modules/Patterns/Layout/Card";
import { Input } from "../../../../../../modules/Patterns/Forms/Input";
import { Select } from "../../../../../../modules/Patterns/Forms/Select";
import { Textarea } from "../../../../../../modules/Patterns/Forms/Textarea";

/* ANCHOR: 📨 Query imports. */
import { ReportCreate } from "../Api";

/* ANCHOR: 🎨 Style imports. */
import { BiUserVoice, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Spinner } from "react-bootstrap";

/* ANCHOR: 📝 Form imports. */
import { Formik, Form } from "formik";
import { ValidationSchema, FormSchema } from "./Schema";

export default function ReportForm({ reportUrl }) {
  let history = useHistory();

  const [spinnerInButton, setSpinnerInButton] = useState(false);
  const [txtButton, setTxtButton] = useState("Salvar");

  const [initialValues, setInitialValues] = useState({
    address_zipcode: "",
    address_street: "",
    address_number: "",
    address_district: "",
    address_reference: "",
    photo: "",
    description: "",
    user: false,
  });

  const onSubmit = async (values) => {
    setSpinnerInButton(true);
    setTxtButton("Salvando");

    const data = FormSchema(values, user);

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
  const user = Cookies.getJSON("auth");

  const anonymousOptions = [
    { key: "Não", value: false },
    { key: "Sim", value: true },
  ];

  return (
    <>
      <CardLayout
        headerIcon={<BiUserVoice color="#00aeff" size={20} />}
        headerTitle="Nova Denúncia"
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
          validateOnChange={false}
          validateOnBlur={true}
        >
          {({ values, setFieldValue, setFieldTouched, isValid, dirty }) => (
            <>
              <Form className="form form-label-right">
                <div className="row">
                  <div className="col-lg-3 form-group">
                    <Input
                      type="text"
                      label="CEP"
                      name="address_zipcode"
                      placeholder="CEP"
                      mask="99999-999"
                      spantext="*"
                    />
                  </div>
                  <div className="col-lg-4 form-group">
                    <Input
                      type="text"
                      label="Rua"
                      name="address_street"
                      placeholder="Rua"
                      spantext="*"
                    />
                  </div>
                  <div className="col-lg-2 form-group">
                    <Input
                      type="text"
                      label="Número"
                      name="address_number"
                      placeholder="Número"
                      spantext="*"
                    />
                  </div>
                  <div className="col-lg-3 form-group">
                    <Input
                      type="text"
                      label="Bairro"
                      name="address_district"
                      placeholder="Bairro"
                      spantext="*"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 form-group">
                    <Input
                      type="text"
                      label="Referência"
                      name="address_reference"
                      placeholder="Referência"
                    />
                  </div>
                  <div className="col-lg-4 form-group">
                    <label>Foto</label>
                    <input
                      type="file"
                      className="form-control"
                      name="photo"
                      accept=".jpg, .jpeg, .png, .gif"
                      onChange={(e) => {
                        setFieldValue("photo", e.target.files[0]);
                      }}
                    />
                  </div>
                  <div className="col-lg-3 form-group">
                  <Select
                      options={anonymousOptions}
                      label="Anônimo"
                      name="user"
                      value={values.user}
                      onClick={(e) => setFieldTouched("user", true)}
                      onChange={(e) => {
                        setFieldValue(
                          "user",
                          e.target.value === "true" ? true : false
                        );
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 form-group">
                    <Textarea
                      label="Descrição"
                      name="description"
                      placeholder="Descrição"
                      spantext="*"
                      value={values.description !== null ? values.description : ""}
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
