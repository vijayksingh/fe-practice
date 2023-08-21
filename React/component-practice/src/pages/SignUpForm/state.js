export const initialFormState = {
  fields: {
    username: { value: "", isValid: false, isFocused: true, isVisited: false },
    email: { value: "", isValid: false, isFocused: true, isVisited: false },
    password: { value: "", isValid: false, isFocused: true, isVisited: false },
    confirmPassword: {
      value: "",
      isValid: false,
      isFocused: true,
      isVisited: false,
    },
    agreeToTerms: {
      value: "",
      isValid: false,
      isFocused: true,
      isVisited: false,
    },
  },
};
