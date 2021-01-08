import "./Header.css";

function Header() {
  const loggedIn = true;

  return (
    <div className="header">
      <h1 className="header__title">NewsExplorer</h1>
      <div className="header__btn-container">
        <p className="header__btn header__btn-active header__btn_main">Главная</p>
        {loggedIn ? (
          <>
            <p className="header__btn header__btn_save-articles">Сохраненные статьи</p>
            <p className="header__btn header__btn_logout">Андрей</p>
          </>
        ) : (
          <p className="header__btn header__btn_logout">Авторизоваться</p>
        )}
      </div>
    </div>
  );
}

export default Header;
