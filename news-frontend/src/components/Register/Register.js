import "./Register.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Input from "../ui/Input";

function Register({ onRegister, isOpen, onClose, changeModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister();
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
    >
      <Input
        labelValue="Email"
        placeholder="Введите почту"
        type="email"
        name="email"
        className="popup__input"
        errorText="Неправильный формат email"
      />
      <Input
        labelValue="Пароль"
        placeholder="Введите пароль"
        type="password"
        name="password"
        className="popup__input"
      />

      <Input
        labelValue="Имя"
        placeholder="Введите своё имя"
        type="name"
        name="name"
        className="popup__input"
      />
    </PopupWithForm>
  );
}

export default Register;
