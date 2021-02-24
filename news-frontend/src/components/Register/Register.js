import React from "react";
import "./Register.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Input from "../ui/Input";
import validationForm from "../ValidationFormHook/validationForm";

function Register({ onRegister, isOpen, onClose, changeModal, validationError }) {
  const validationRegister = validationForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email, name } = validationRegister.values;
    onRegister(password, email, name);
  };

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name={"register"}
      title={"Регистрация"}
      btnValue={"Зарегистрироваться"}
      isOpen={isOpen}
      isValid={validationRegister.isValid}
      onClose={onClose}
      changeModalValue="Войти"
      changeModal={changeModal}
      text="или "
      errorValidation={validationError}
    >
      <Input
        labelValue="Email"
        placeholder="Введите почту"
        type="email"
        name="email"
        className="popup__input"
        errorText={validationRegister.errors.email}
        onChange={validationRegister.handleChange}
      />
      <Input
        labelValue="Пароль"
        placeholder="Введите пароль"
        type="password"
        name="password"
        className="popup__input"
        errorText={validationRegister.errors.password}
        onChange={validationRegister.handleChange}
        minLength="8"
      />

      <Input
        labelValue="Имя"
        placeholder="Введите своё имя"
        type="name"
        name="name"
        className="popup__input"
        errorText={validationRegister.errors.name}
        onChange={validationRegister.handleChange}
        minLength="2"
      />
    </PopupWithForm>
  );
}

export default Register;
