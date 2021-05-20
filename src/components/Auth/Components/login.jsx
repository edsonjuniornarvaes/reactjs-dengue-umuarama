/* SECTION: Standard imports. */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

/* SECTION: Lib imports. */
import { addDays } from "date-fns";
import Cookies from "js-cookie";

/* SECTION: Query imports. */
import { useAuthContext } from "../../../context/AuthContext";

/* SECTION: Layout imports. */
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

export default function Login() {
  const initialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setIsAuthorized } = useAuthContext();

  const history = useHistory();

  const submit = () => {
    const auth = Cookies.getJSON("auth");

    if (auth) {
      setIsAuthorized(true);
      history.push(`/`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email não pode ficar em branco";
    } else if (!regex.test(values.email)) {
      errors.email = "Formato de email inválido";
    }

    if (!values.password) {
      errors.password = "Senha não pode ficar em branco";
    } else if (values.password.length < 4) {
      errors.password = "Mínimo de 4 caracteres";
    }

    if (regex.test(values.email) && values.email != "user@gmail.com") {
      errors.email = "Usuário incorreto";
    }

    if (values.password.length >= 4 && values.password != "123password") {
      errors.password = "Senha incorreta";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      Cookies.set("auth", JSON.stringify(true), {
        expires: addDays(new Date(), 1),
      });

      submit();
    }
  }, [formErrors]);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
          className={formErrors.email && "input-error"}
        />
        {formErrors.email && (
          <span className="error text-danger">{formErrors.email}</span>
        )}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          value={formValues.password}
          onChange={handleChange}
          className={formErrors.password && "input-error"}
        />
        {formErrors.password && (
          <span className="error text-danger">{formErrors.password}</span>
        )}
      </Form.Group>
      <Form.Row controlId="formBasicPassword">
        <Nav.Link href="#" className="mr-auto text-muted link-menu mr-2 mt-2">
          Novo usuário?
        </Nav.Link>
        <Button className="mt-1" variant="primary" type="submit">
          Login
        </Button>
      </Form.Row>
    </Form>
  );
}
