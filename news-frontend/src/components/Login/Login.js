import "./Login.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Input from "../ui/Input";

function Login({ onLogin, isOpen, onClose, changeModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
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
      />
      <Input
        labelValue="Пароль"
        placeholder="Введите пароль"
        type="password"
        name="password"
        className="popup__input"
      />
    </PopupWithForm>
  );
}

export default Login;
