import React from "react";
import "./Login.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Input from "../ui/Input";

function Login({ onLogin, isOpen, onClose, changeModal }) {
  const [data, setData] = React.useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    onLogin(email, password);
  };

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name={"login"}
      title={"Вход"}
      btnValue={"Войти"}
      isOpen={isOpen}
      onClose={onClose}
      changeModalValue="Зарегистрироваться"
      changeModal={changeModal}
      text="или "
    >
      <Input
        labelValue="Email"
        placeholder="Введите почту"
        type="email"
        name="email"
        className="popup__input"
        errorText="Неправильный формат email"
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
    </PopupWithForm>
  );
}

export default Login;
