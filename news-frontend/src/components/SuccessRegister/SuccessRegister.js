import "./SuccessRegister.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SuccessRegister({ isOpen, onClose, changeModal }) {
  return (
    <PopupWithForm
      name="success-register"
      isOpen={isOpen}
      onClose={onClose}
      changeModal={changeModal}
      changeModalValue="Войти"
      title="Пользователь успешно зарегистрирован"
      modifier="popup__button_type_hidden"
    />
  );
}

export default SuccessRegister;
