import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Button from "../ui/Button";

import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ headerClassName, onAuthorizeClick, loggedIn, logOut }) {
  return (
    <div className={headerClassName}>
      <Link className="header__title" to="/">
        NewsExplorer
      </Link>
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
            <Link to="/" className="header__link header__link_type_logout-main" onClick={logOut}>
              Андрей
            </Link>
          </Route>
          <Route path="/saved-news">
            <Link
              to="/"
              className="header__link header__link_type_logout-saved-news"
              onClick={logOut}
            >
              Андрей
            </Link>
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default Header;
