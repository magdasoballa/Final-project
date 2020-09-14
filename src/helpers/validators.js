const errorMessages = Object.freeze({
  isRequired: "Field is required",
  passIsToShort: "Password must have at least 8 letters",
  wrongEmail: "Wrong e-mail adress",
  isNotTheSamePass: "Passwords must be different!",
});

export const validateEmail = (email) => {
  if (!email) {
    return errorMessages.isRequired;
  }
  if (!email.includes("@") || !email.includes(".")) {
    return errorMessages.wrongEmail;
  }
  return "";
};

export const validatePass = (password) => {
  if (!password) {
    return errorMessages.isRequired;
  }
  if (password.length < 8) {
    return errorMessages.passIsToShort;
  }
  return "";
};

export const isTheSamePass = (password, repeatPassword) => {
  return password === repeatPassword ? "" : errorMessages.isNotTheSamePass;
};

export const validateIsRequired = (value) => {
  return value === "" ? errorMessages.isRequired : "";
};
