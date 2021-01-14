import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Button from "../ui/Button";

import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ headerClassName, onAuthorizeClick, loggedIn, logOut }) {
  return (
    <div className={headerClassName}>
      <h1 className="header__title">NewsExplorer</h1>
      <Navigation onAuthorizeClick={onAuthorizeClick} loggedIn={loggedIn} logOut={logOut} />
      {!loggedIn ? (
        <Button
          name="Авторизоваться"
          onClick={onAuthorizeClick}
          className="button button__header"
        />
      ) : (
        <Switch>
          <Route exact path="/">
            <NavLink
              to="/"
              className="header__link header__link_type_logout-main"
              onClick={logOut}
            >
              Андрей
            </NavLink>
          </Route>
          <Route path="/saved-news">
            <NavLink
              to="/"
              className="header__link header__link_type_logout-saved-news"
              onClick={logOut}
            >
              Андрей
            </NavLink>
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default Header;
