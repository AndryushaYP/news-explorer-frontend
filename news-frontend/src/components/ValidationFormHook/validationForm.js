import React from "react";

export default function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
    if (name === "email" && target.validationMessage) {
      setErrors({ ...errors, [name]: "Некорректный email" });
    }
    if (name === "password" && target.validationMessage) {
      setErrors({ ...errors, [name]: "Минимальная длина пароля - 8 символов" });
    }
    if (name === "name" && target.validationMessage) {
      setErrors({ ...errors, [name]: "Введите имя" });
    }
    if (target.value === "") {
      setErrors({ ...errors, [name]: "Поле не может быть пустым" });
    }
  };

  const resetForm = () => {
    setValues({});
    setErrors({});
    setIsValid(false);
  };

  return { values, handleChange, errors, isValid, resetForm };
}
