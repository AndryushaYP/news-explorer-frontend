import { NavLink, Route, Switch } from "react-router-dom";
import "./Navigation.css";

function Navigation({ loggedIn, onAuthorizeClick }) {
  return (
    <nav className="navigation">
      <NavLink
        exact
        to="/"
        className="navigation__link navigation__link_type_main"
        activeClassName="navigation__link_type_active"
      >
        Главная
      </NavLink>
      {!loggedIn ? (
        <NavLink to="/" className="navigation__link navigation__link_type_authorize">
          Авторизоваться
        </NavLink>
      ) : (
        <>
          <NavLink
            to="/saved-news"
            className="navigation__link navigation__link_type_save-articles"
            activeClassName="navigation__link_type_active"
          >
            Сохраненные статьи
          </NavLink>
          <Switch>
            <Route exact path="/">
              <NavLink
                to="/"
                className="navigation__link navigation__link_type_logout-main"
                onClick={onAuthorizeClick}
              >
                Андрей
              </NavLink>
            </Route>
            <Route path="/saved-news">
              <NavLink
                to="/"
                className="navigation__link navigation__link_type_logout-saved-news"
                onClick={onAuthorizeClick}
              >
                Андрей
              </NavLink>
            </Route>
          </Switch>
        </>
      )}
    </nav>
  );
}

export default Navigation;
