import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Button from "../ui/Button";

import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ headerClassName, onAuthorizeClick, loggedIn, logOut, onClose }) {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  const handleMenu = (e) => {
    if (!isOpenMenu) {
      return setIsOpenMenu(true);
    }
    setIsOpenMenu(false);
    onClose(e);
  };

  return (
    <div className={!isOpenMenu ? "header__overlay" : "header__overlay_type_mobile"}>
      <div className={!isOpenMenu ? headerClassName : "header__main header_type_mobile"}>
        <Link
          className={!isOpenMenu ? "header__title" : "header__title header__title_type-mobile"}
          to="/"
        >
          NewsExplorer
        </Link>
        <Switch>
          <Route exact path="/">
            <button
              className={!isOpenMenu ? "header__menu" : "header__menu header__menu-close"}
              onClick={handleMenu}
            ></button>
          </Route>
          <Route path="/saved-news">
            <button
              className={!isOpenMenu ? "header__menu-black" : "header__menu header__menu-close"}
              onClick={handleMenu}
            ></button>
          </Route>
        </Switch>

        <Navigation
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
          <Switch>
            <Route exact path="/">
              <Link
                to="/"
                className={
                  !isOpenMenu
                    ? "header__link header__link_type_logout-main"
                    : "header__link header__link_type_logout-main header__link_type_visible"
                }
                onClick={logOut}
              >
                Андрей
              </Link>
            </Route>
            <Route path="/saved-news">
              <Link
                to="/"
                className={
                  !isOpenMenu
                    ? "header__link header__link_type_logout-saved-news"
                    : "header__link header__link_type_logout-saved-news header__link_type_visible"
                }
                onClick={logOut}
              >
                Андрей
              </Link>
            </Route>
          </Switch>
        )}
      </div>
    </div>
  );
}

export default Header;
