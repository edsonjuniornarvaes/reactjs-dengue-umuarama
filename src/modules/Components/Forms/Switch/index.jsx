/* ANCHOR: 🧩 Standard imports. */
import React, { useRef } from "react";

/* ANCHOR: 📚 Lib imports. */
import PropTypes from "prop-types";

export const ToggleSwitch = ({
  id,
  name,
  checked,
  onChange,
  optionLabels,
  small,
  disabled,
}) => {
  const checkedRef = useRef(null);

  function handleKeyPress(e) {
    if (e.keyCode !== 32) return;

    e.preventDefault();
    onChange(!checked);
  }

  return (
    <div className={"toggle-switch" + (small ? " small-switch" : "")}>
      <input
        type="checkbox"
        id={id}
        name={name}
        className="toggle-switch-checkbox"
        checked={checked}
        ref={checkedRef}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      {id ? (
        <label
          className="toggle-switch-label"
          htmlFor={id}
          tabIndex={disabled ? -1 : 1}
        >
          <span
            className={
              disabled
                ? "toggle-switch-inner toggle-switch-disabled"
                : "toggle-switch-inner"
            }
            tabIndex={-1}
          />
          <span
            className={
              disabled
                ? "toggle-switch-switch toggle-switch-disabled"
                : "toggle-switch-switch"
            }
            tabIndex={-1}
          />
        </label>
      ) : null}
    </div>
  );
};

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  optionLabels: PropTypes.array,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
};
