/* ANCHOR: 🧩 Standard imports. */
import React from "react";

/* ANCHOR: 📚 Lib imports. */
import InputMask from "react-input-mask";

/* ANCHOR: 🎨 Style imports. */
import { TextAlert } from "../../Components/Foundation/TextAlert";

/* ANCHOR: 📝 Form imports. */
import { useField, ErrorMessage } from "formik";

const getFieldCSSClasses = (touched, errors, customClassName) => {
  const classes = [
    `${
      typeof customClassName != "undefined" &&
      customClassName != null &&
      customClassName
    } form-control`,
  ];
  if (touched && errors) {
    classes.push("is-invalid");
  }

  if (touched && !errors) {
    classes.push("is-valid");
  }

  return classes.join(" ");
};

export const Input = ({
  customClassName = null,
  label,
  spantext,
  mask,
  addonIcon,
  addonText,
  component: InputComponent,
  ...props
}) => {
  const [inputProps, meta] = useField(props);
  const id = props.id || props.name;

  if (
    inputProps.value === "null" ||
    inputProps.value === null ||
    typeof inputProps.value === "undefined"
  ) {
    inputProps.value = "";
  }

  return (
    <>
      {label && (
        <label htmlFor={id}>
          {label}
          <span className="mt-1 ml-1 text-danger">{spantext}</span>
        </label>
      )}
      {!mask ? (
        typeof addonIcon != "undefined" ? (
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <span className="mr-1">{addonIcon}</span>
                {addonText}
              </span>
            </div>
            <InputComponent
              className={getFieldCSSClasses(meta.touched, meta.error)}
              id={id}
              {...inputProps}
              {...props}
            />
          </div>
        ) : (
          <InputComponent
            className={getFieldCSSClasses(
              meta.touched,
              meta.error,
              customClassName
            )}
            id={id}
            {...inputProps}
            {...props}
          />
        )
      ) : (
        <InputMask
          className={getFieldCSSClasses(meta.touched, meta.error)}
          mask={mask}
          {...inputProps}
          {...props}
        />
      )}
      <ErrorMessage component={TextAlert} name={inputProps.name} />
    </>
  );
};

Input.defaultProps = {
  component: "input",
};
