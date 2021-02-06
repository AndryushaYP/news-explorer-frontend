import React from "react";
import "./Register.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Input from "../ui/Input";

function Register({ onRegister, isOpen, onClose, changeModal }) {
  const [data, setData] = React.useState({ email: "", password: "", name: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email, name } = data;
    onRegister(password, email, name);
  };

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name={"register"}
      title={"Регистрация"}
      btnValue={"Зарегистрироваться"}
      isOpen={isOpen}
      onClose={onClose}
      changeModalValue="Войти"
      changeModal={changeModal}
      text="или "
      errorValidation="Такой пользователь уже есть"
      modifier="popup__button_type_disable"
    >
      <Input
        labelValue="Email"
        placeholder="Введите почту"
        type="email"
        name="email"
        className="popup__input"
        onChange={handleChange}
      />
      <Input
        labelValue="Пароль"
        placeholder="Введите пароль"
        type="password"
        name="password"
        className="popup__input"
        onChange={handleChange}
      />

      <Input
        labelValue="Имя"
        placeholder="Введите своё имя"
        type="name"
        name="name"
        className="popup__input"
        onChange={handleChange}
      />
    </PopupWithForm>
  );
}

export default Register;
