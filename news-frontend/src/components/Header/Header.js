import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ onAuthorizeClick, loggedIn, logOut, onClose, name, onClick, location }) {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const [classNameHamburgerMenu, setClassNameHamburgerMenu] = React.useState("");
  const [classNameLogout, setClassNameLogout] = React.useState("");
  const [classNameHeader, setClassNameHeader] = React.useState("");

  React.useEffect(() => {
    getClassName();
  });

  const getClassName = () => {
    if (location.pathname === "/") {
      setClassNameHamburgerMenu(!isOpenMenu ? "header__menu" : "header__menu header__menu-close");
      setClassNameLogout(
        !isOpenMenu
          ? "header__link header__link_type_logout-main"
          : "header__link header__link_type_logout-main header__link_type_visible"
      );
      setClassNameHeader(!isOpenMenu ? "header header__main" : "header__main header_type_mobile");
    } else {
      setClassNameHamburgerMenu(
        !isOpenMenu ? "header__menu-black" : "header__menu header__menu-close"
      );
      setClassNameLogout(
        !isOpenMenu
          ? "header__link header__link_type_logout-saved-news"
          : "header__link header__link_type_logout-saved-news header__link_type_visible"
      );
      setClassNameHeader(
        !isOpenMenu ? "header header__saved-news" : "header__main header_type_mobile"
      );
    }
  };

  const handleMenu = (e) => {
    if (!isOpenMenu) {
      return setIsOpenMenu(true);
    }
    setIsOpenMenu(false);
    onClose(e);
  };

  return (
    <div className={!isOpenMenu ? "header__overlay" : "header__overlay_type_mobile"}>
      <div className={classNameHeader}>
        <Link
          className={!isOpenMenu ? "header__title" : "header__title header__title_type-mobile"}
          to="/"
        >
          NewsExplorer
        </Link>
        <button className={classNameHamburgerMenu} onClick={handleMenu}></button>
        <Navigation
          onClick={onClick}
          onAuthorizeClick={onAuthorizeClick}
          loggedIn={loggedIn}
          logOut={logOut}
          isOpenMenu={isOpenMenu}
        />
        {!loggedIn ? (
          <Button
            name="Авторизоваться"
            onClick={onAuthorizeClick}
            className={
              !isOpenMenu
                ? "button button__header"
                : "button button__header button__header_type_visible"
            }
          />
        ) : (
          <Link to="/" className={classNameLogout} onClick={logOut}>
            {name}
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
