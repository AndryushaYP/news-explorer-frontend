import "./Login.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Login({ onLogin, isOpen, onClose }) {
  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name={"edit"}
      title={"Вход"}
      btnValue={"Войти"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <label className="popup__label">
        <input
          onChange={handleChange}
          placeholder="Введите почту"
          type="email"
          name="name"
          className="popup__input popup__input_name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__error" id="name-error"></span>
      </label>

      <label className="popup__label">
        <input
          onChange={handleChange}
          placeholder="Введите пароль"
          type="password"
          name="about"
          minLength="2"
          maxLength="200"
          className="popup__input popup__input_profession"
          required
        />
        <span className="popup__error" id="about-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default Login;
