import React from "react";
import "./Login.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Input from "../ui/Input";
import validationForm from "../ValidationFormHook/validationForm";

function Login({ onLogin, isOpen, onClose, changeModal, validationError }) {
  const validationLogin = validationForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = validationLogin.values;
    onLogin(email, password);
  };

  const clearForm = (e) => {
    onClose(e);
    validationLogin.resetForm();
  };

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name={"login"}
      title={"Вход"}
      btnValue={"Войти"}
      isOpen={isOpen}
      onClose={clearForm}
      changeModalValue="Зарегистрироваться"
      changeModal={changeModal}
      text="или "
      isValid={validationLogin.isValid}
      errorValidation={validationError}
    >
      <Input
        labelValue="Email"
        placeholder="Введите почту"
        type="email"
        name="email"
        className="popup__input"
        errorText={validationLogin.errors.email}
        onChange={validationLogin.handleChange}
      />
      <Input
        labelValue="Пароль"
        placeholder="Введите пароль"
        type="password"
        minLength="8"
        name="password"
        className="popup__input"
        errorText={validationLogin.errors.password}
        onChange={validationLogin.handleChange}
      />
    </PopupWithForm>
  );
}

export default Login;
