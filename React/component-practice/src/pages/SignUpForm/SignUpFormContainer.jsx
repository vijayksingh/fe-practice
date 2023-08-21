import React from "react";
import SignUpForm from "./SignUpForm";
import { initialFormState } from "./state";

function SignUpFormContainer() {
  const [state, setState] = React.useState({ ...initialFormState });
  console.log(state);

  const onChange = (fieldName, value) => {
    // update field value
    const updatedField = { ...state.fields[fieldName], value };
    // validate the field
    updatedField.isValid = validateField(updatedField);
    // update the state
    const updatedState = {
      ...state,
      fields: { ...state.fields, [fieldName]: updatedField },
    };
    const isFormValid = validateForm(updatedState.fields);
    setState({ ...updatedState, isFormValid });
  };

  const onFocus = (fieldName) => {
    const updatedField = { ...state.fields[fieldName], isFocused: true };
    const updatedState = { ...state.fields, [fieldName]: updatedField };
    setState({
      ...state,
      fields: updatedState,
      isFormValid: state.isFormValid,
    });
  };

  const onBlur = (fieldName) => {
    const updatedField = {
      ...state.fields[fieldName],
      isFocused: false,
      isVisited: true,
    };
    const updatedState = { ...state.fields, [fieldName]: updatedField };
    setState({
      ...state,
      fields: updatedState,
      isFormValid: state.isFormValid,
    });
  };

  return (
    <SignUpForm
      fields={state.fields}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

export default SignUpFormContainer;
