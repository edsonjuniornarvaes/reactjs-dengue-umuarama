/* ANCHOR: 🧩 Standard imports. */
import { useState } from "react";
import { useHistory } from "react-router-dom";

/* ANCHOR: 📚 Lib imports. */
import Cookies from "js-cookie";
import { Helmet, HelmetProvider } from "react-helmet-async";

/* ANCHOR: 📦 Component imports. */
import { CardLayout } from "../../../../../../modules/Patterns/Layout/Card";
import { Input } from "../../../../../../modules/Patterns/Forms/Input";
import { Textarea } from "../../../../../../modules/Patterns/Forms/Textarea";

/* ANCHOR: 🎛️ Layout imports. */
import dengueUmuaramaLogo from "../../../../../../dengue-umuarama-logo.png";

/* ANCHOR: 📨 Query imports. */
import { ReportCreate } from "../Api";

/* ANCHOR: 🎨 Style imports. */
import {
  BiUserVoice,
  BiErrorAlt,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";
import { Spinner } from "react-bootstrap";

/* ANCHOR: 📝 Form imports. */
import { Formik, Form } from "formik";
import { ValidationSchema, FormSchema } from "./Schema";
import { CpfVerify } from "../../../../../../utils/validation";
import { PhoneFormat } from "../../../../../../utils/format";

export default function ReportForm({ reportUrl }) {
  let history = useHistory();
  const helmetContext = {};

  const [spinnerInButton, setSpinnerInButton] = useState(false);
  const [txtButton, setTxtButton] = useState("Salvar");
  const user = Cookies.getJSON("auth");

  const onSubmit = async (values) => {
    setSpinnerInButton(true);
    setTxtButton("Salvando");

    const data = FormSchema(values, user);

    await ReportCreate(reportUrl, data)
      .then((res) => {
        setTxtButton("Salvar");
        setSpinnerInButton(false);

        setTimeout(() => {
          // history.push("/");
        }, 500);
      })
      .catch(() => {
        setTxtButton("Salvar");
        setSpinnerInButton(false);
      });
  };

  const HandleCnpjVerify = async (e) => {
    if (e.target.value && e.target.value !== "") {
      const data = await CpfVerify(e.target.value);

      if (data === "invalid") return "invalid";

      return "valid";
    }
  };

  return (
    <>
      <HelmetProvider context={helmetContext}>
        <link
          rel="icon"
          type="image/png"
          href={dengueUmuaramaLogo}
          sizes="16x16"
        />
        <Helmet title="Web Dengue | Denúncia" />
      </HelmetProvider>
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
          initialValues={{
            address_zipcode: "",
            address_street: "",
            address_number: "",
            address_district: "",
            address_reference: "",
            photo: "",
            description: "",
            reporter_name: "",
            reporter_cpf: "",
            reporter_phone: "",
          }}
          validateOnMount={true}
          validateOnChange={false}
          validateOnBlur={true}
        >
          {({ values, setFieldValue, isValid, errors }) => (
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
                  <div className="col-lg-6 form-group">
                    <Input
                      type="text"
                      label="Referência"
                      name="address_reference"
                      placeholder="Referência"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
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
                </div>
                <div className="row">
                  <div className="col-12 form-group">
                    <Textarea
                      label="Descrição"
                      name="description"
                      placeholder="Descrição"
                      spantext="*"
                      value={
                        values.description !== null ? values.description : ""
                      }
                    />
                  </div>
                </div>
                {!values.user && (
                  <>
                    <p className="py-4 ml-2 text-center">
                      <BiErrorAlt color="#00aeff" size={20} /> Para se
                      identificar, preencha os dados abaixo
                    </p>
                    <hr />
                    <div className="row">
                      <div className="col-lg-4 form-group">
                        <Input
                          type="text"
                          label="Nome"
                          name="reporter_name"
                          placeholder="Nome"
                        />
                      </div>
                      <div className="col-lg-4 form-group">
                        <Input
                          type="text"
                          id="cpf"
                          label="CPF"
                          name="reporter_cpf"
                          placeholder="CPF"
                          mask="999.999.999-99"
                          onBlur={async (e) => {
                            const data =
                              e !== "" && (await HandleCnpjVerify(e));
                            if (data === "valid") {
                              setFieldValue("reporter_cpf", e.target.value);
                            }
                            if (data === "invalid") {
                              setFieldValue("reporter_cpf", "");
                            }
                          }}
                        />
                      </div>
                      <div className="col-lg-4 form-group">
                        <Input
                          type="text"
                          label="Telefone"
                          name="reporter_phone"
                          placeholder="Telefone"
                          addonText="+55"
                          onBlur={PhoneFormat}
                        />
                      </div>
                    </div>
                  </>
                )}
                <hr />
                <footer className={"d-flex justify-content-end"}>
                  <button
                    type="button"
                    onClick={() => history.push("/")}
                    className="btn btn-secondary btn-elevate mr-5 font-weight-bold text-dark-60"
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
