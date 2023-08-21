/* eslint-disable react/prop-types */

import { useId } from "react";

function CheckboxField({
  value,
  isValid,
  isFocused,
  isVisited,
  onChange,
  onFocus,
  onBlur,
  label,
  ...rest
}) {
  const checkBoxStyle = isFocused ? "focused" : isVisited ? "visited" : "";
  const id = useId();

  return (
    <div className={`checkbox-field ${checkBoxStyle}`}>
      <input
        id={id}
        type="checkbox"
        checked={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...rest}
      />
      <label htmlFor={id}>{label}</label>
      {!isValid && isVisited && <p className="error">Invalid input</p>}
    </div>
  );
}

export default CheckboxField;
