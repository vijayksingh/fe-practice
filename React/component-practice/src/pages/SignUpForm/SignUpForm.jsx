/* eslint-disable react/prop-types */

import CheckboxField from "./CheckboxField";
import InputField from "./InputField";

import "./styles.css";

function SignUpForm({ fields, onChange, onFocus, onBlur }) {
  return (
    <form className="sign-up-form">
      <InputField
        label="Username"
        type="text"
        value={fields.username.value}
        isValid={fields.username.isValid}
        isFocused={fields.username.isFocused}
        isVisited={fields.username.isVisited}
        onChange={(e) => onChange("username", e.target.value)}
        onFocus={() => onFocus("username")}
        onBlur={() => onBlur("username")}
        name="firstName"
      />
      <InputField
        label="Email"
        type="email"
        value={fields.email.value}
        isValid={fields.email.isValid}
        isFocused={fields.email.isFocused}
        isVisited={fields.email.isVisited}
        onChange={(e) => onChange("email", e.target.value)}
        onFocus={() => onFocus("email")}
        onBlur={() => onBlur("email")}
        name="email"
      />
      <InputField
        label="Password"
        type="password"
        value={fields.password.value}
        isValid={fields.password.isValid}
        isFocused={fields.password.isFocused}
        isVisited={fields.password.isVisited}
        onChange={(e) => onChange("password", e.target.value)}
        onFocus={() => onFocus("password")}
        onBlur={() => onBlur("password")}
        name="password"
      />
      <InputField
        label="Confirm Password"
        type="password"
        value={fields.confirmPassword.value}
        isValid={fields.confirmPassword.isValid}
        isFocused={fields.confirmPassword.isFocused}
        isVisited={fields.confirmPassword.isVisited}
        onChange={(e) => onChange("confirmPassword", e.target.value)}
        onFocus={() => onFocus("confirmPassword")}
        onBlur={() => onBlur("confirmPassword")}
        name="confirmPassword"
      />
      <CheckboxField
        label="I agree to the Terms and Conditions"
        value={fields.agreeToTerms.value}
        isValid={fields.agreeToTerms.isValid}
        isFocused={fields.agreeToTerms.isFocused}
        isVisited={fields.agreeToTerms.isVisited}
        onChange={(e) => onChange("agreeToTerms", e.target.checked)}
        onFocus={() => onFocus("agreeToTerms")}
        onBlur={() => onBlur("agreeToTerms")}
        name="agreeToTerms"
      />
    </form>
  );
}

export default SignUpForm;
