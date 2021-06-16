/* ANCHOR: 🎨 Style imports. */
import { TextAlert } from "../../Components/Foundation/TextAlert";

/* ANCHOR: 📝 Form imports. */
import { Field, ErrorMessage } from "formik";

export function Textarea(props) {
  const { label, spantext, name, ...rest } = props;

  if (rest.value === "null") rest.value = "";

  return (
    <>
      <label htmlFor={name}>
        {label} <span className="mt-1 ml-1 text-danger">{spantext}</span>
      </label>      
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
