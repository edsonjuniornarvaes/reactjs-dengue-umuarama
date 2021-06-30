/* ANCHOR: 🧩 Standard imports. */
import { useState } from "react";

/* ANCHOR: 📦 Component imports. */
import { Textarea } from "../../../../Forms/Textarea";

/* ANCHOR: 📨 Query imports. */
import { ReportVerification } from "../Api";

/* ANCHOR: 🎨 Style imports. */
import { Modal } from "react-bootstrap";
import {
  BiChevronLeft,
  BiChevronRight,
  BiStreetView,
  BiBullseye,
  BiAlignLeft,
  BiImage,
  BiErrorAlt,
} from "react-icons/bi";
import { Spinner } from "react-bootstrap";

/* ANCHOR: 📝 Form imports. */
import { Formik, Form } from "formik";
import { ValidationSchema, FormSchema } from "./Schema";

export function ReportMoreInfoDialog({
  show,
  onHide,
  reportId,
  reportStreet,
  reportReference,
  reportDescription,
  reportImage,
  reportUrl,
  reportUser,
  fetchData,
}) {
  const [spinnerInButton, setSpinnerInButton] = useState(false);
  const [txtButton, setTxtButton] = useState("Verificar");

  const onSubmit = async (values) => {
    setSpinnerInButton(true);
    setTxtButton("Verificando");

    const data = FormSchema(values, reportUser);

    await ReportVerification(reportUrl, data)
      .then((res) => {
        setTxtButton("Verificar");
        setSpinnerInButton(false);

        setTimeout(() => {
          fetchData({});
          onHide();
        }, 500);
      })
      .catch(() => {
        setTxtButton("Verificar");
        setSpinnerInButton(false);
      });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Verificação</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {console.log(typeof reportImage != "undefined" && reportImage)}
        <p>
          <BiStreetView size={22} />
          <strong className="ml-2">Rua</strong>: {reportStreet}
        </p>
        <p>
          <BiBullseye size={22} />
          <strong className="ml-2">Referência</strong>: {reportReference}
        </p>
        <p>
          <BiAlignLeft size={22} />
          <strong className="ml-2">Descrição</strong>: {reportDescription}
        </p>
        <hr />
        <p>
          <BiImage size={22} />
          <strong className="ml-2">Imagem do local</strong>
        </p>
        {typeof reportImage !== "undefined" ? (
          <img src={reportImage} style={{ width: "100%" }} alt="Denúncia" />
        ) : (
          <>
            <BiErrorAlt size={22} />
            <strong className="ml-2">Sem imagem do local</strong>
          </>
        )}
        <hr />
        <Formik
          onSubmit={onSubmit}
          enableReinitialize={true}
          validationSchema={ValidationSchema}
          initialValues={{ description: "" }}
          validateOnMount={true}
          validateOnChange={false}
          validateOnBlur={true}
        >
          {({ values, setFieldValue, setFieldTouched, isValid, dirty }) => (
            <Form className="form form-label-right">
              <div className="row">
                <div className="form-group col-12">
                  <Textarea
                    label="Confirmar verificação"
                    name="verification"
                    placeholder="Confirmar verificação"
                    spantext="*"
                    value={values.verification}
                  />
                </div>
              </div>
              <footer className="verificationFooter">
                <button
                  type="button"
                  onClick={onHide}
                  className="btn btn-secondary btn-elevate mr-5 font-weight-bold text-dark-60"
                >
                  <BiChevronLeft size={18} />
                  Voltar
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
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}
