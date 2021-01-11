import "./Header.css";
import React from "react";

function Header({ className }) {
  const loggedIn = false;
  return (
    <div className={className}>
      <h1 className="header__title">NewsExplorer</h1>
      <div className="header__btn-container">
        <p className="header__btn header__btn_main">Главная</p>
        {!loggedIn ? (
          <p className="header__btn header__btn_logout">Авторизоваться</p>
        ) : (
          <>
            <p className="header__btn header__btn_save-articles">Сохраненные статьи</p>
            <p className="header__btn header__btn_logout">Андрей</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
