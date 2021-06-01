/* SECTION: Standard imports. */
import { useState } from "react";

/* SECTION: lib imports. */
import InputMask from "react-input-mask";

/* SECTION: Layout imports. */
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PanelLayout from "../../theme/layouts/Panel";
import { CardLayout } from "../../Patterns/Layout/Card";

export default function NewReport() {
  const [initialValues, setInitialValues] = useState({
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    referencia: "",
    foto: "",
    descricao: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    let formValues = new FormData();

    formValues.append("cep", initialValues.cep);
    formValues.append("rua", initialValues.rua);
    formValues.append("numero", initialValues.numero);
    formValues.append("bairro", initialValues.bairro);
    formValues.append("referencia", initialValues.referencia);
    formValues.append("foto", initialValues.foto);
    formValues.append("descricao", initialValues.descricao);

    for (var pair of formValues.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    fetch("http://api.example/denuncia/nova", {
      method: "POST",
      body: JSON.stringify({ formValues }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  };

  return (
    <PanelLayout title="Nova Denúncia">
      <CardLayout title="Nova Denúncia">
        <Form>
          <Form.Row>
            <Form.Group className="col-12 col-sm-4">
              <Form.Label>CEP</Form.Label>
              <InputMask
                mask="99/99/9999"
                id="cep"
                className="form-control"
                name="cep"
                placeholder="CEP"
                mask="99999-999"
                onChange={(e) => {
                  setInitialValues({ ...initialValues, cep: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="col-12 col-sm-4">
              <Form.Label>Rua</Form.Label>
              <Form.Control
                type="text"
                id="rua"
                name="rua"
                placeholder="Rua"
                onChange={(e) => {
                  setInitialValues({ ...initialValues, rua: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="col-12 col-sm-4">
              <Form.Label>Número</Form.Label>
              <Form.Control
                type="text"
                id="numero"
                name="numero"
                placeholder="Número"
                onChange={(e) => {
                  setInitialValues({
                    ...initialValues,
                    numero: e.target.value,
                  });
                }}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group className="col-12 col-sm-3">
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                type="text"
                id="bairro"
                name="bairro"
                placeholder="Bairro"
                onChange={(e) => {
                  setInitialValues({
                    ...initialValues,
                    bairro: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="col-12 col-sm-6">
              <Form.Label>Referência</Form.Label>
              <Form.Control
                type="text"
                id="referencia"
                name="referencia"
                placeholder="Referência"
                onChange={(e) => {
                  setInitialValues({
                    ...initialValues,
                    referencia: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="col-12 col-sm-3">
              <Form.File
                label="Foto"
                id="foto"
                name="foto"
                accept=".jpg, .jpeg, .png, .gif"
                onChange={(e) => {
                  setInitialValues({
                    ...initialValues,
                    foto: e.target.files[0],
                  });
                }}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group className="col-12">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                id="descricao"
                name="descricao"
                as="textarea"
                rows={3}
                onChange={(e) => {
                  setInitialValues({
                    ...initialValues,
                    descricao: e.target.value,
                  });
                }}
              />
            </Form.Group>
          </Form.Row>
          <Button
            variant="primary"
            type="submit"
            id="submit-form"
            style={{ float: "right" }}
            onClick={onSubmit}
          >
            Enviar
          </Button>
        </Form>
      </CardLayout>
    </PanelLayout>
  );
}
