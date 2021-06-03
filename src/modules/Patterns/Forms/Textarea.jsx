/* ANCHOR: 🎨 Style imports. */
import { TextAlert } from "../../Components/Foundation/TextAlert";

/* ANCHOR: 📝 Form imports. */
import { Field, ErrorMessage } from "formik";

export function Textarea(props) {
  const { label, name, ...rest } = props;

  if (rest.value === "null") rest.value = "";

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field
        className="form-control"
        as="textarea"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage component={TextAlert} name={name} />
    </>
  );
}
