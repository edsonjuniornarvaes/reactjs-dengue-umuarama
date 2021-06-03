/* ANCHOR: 🎨 Style imports. */
import { TextAlert } from "../../Components/Foundation/TextAlert";

/* ANCHOR: 📝 Form imports. */
import { ErrorMessage } from "formik";

export function Select(props) {
  const { label, spantext, name, options, value, ...rest } = props;
  return (
    <>
      <label htmlFor={name}>
        {label} <span className="mt-1 ml-1 text-danger">{spantext}</span>
      </label>
      <select
        className="form-control"
        id={name}
        name={name}
        value={value}
        {...rest}
      >
        {options?.map((option, key) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </select>
      <ErrorMessage component={TextAlert} name={name} />
    </>
  );
}
