/* eslint-disable react/prop-types */

import { useId } from "react";

function InputField({
  type,
  value,
  isValid,
  isFocused,
  isVisited,
  onChange,
  onFocus,
  onBlur,
  label,
  renderInput,
  ...props
}) {
  const inputStyle = isFocused ? "focused" : isVisited ? "visited" : "";
  const id = useId();

  // Default renderInput function
  const defaultRenderInput = (props) => (
    <input className={isValid ? "" : "invalid"} {...props} />
  );

  // Render input
  const Input = renderInput ? renderInput : defaultRenderInput;

  // Render label

  return (
    <div className={`input-field ${inputStyle}`}>
      <label htmlFor={id}>{label}</label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        autoFocus={isFocused}
        {...props}
      />
      {!isValid && isVisited && <p className="error">Invalid input</p>}
    </div>
  );
}

export default InputField;
