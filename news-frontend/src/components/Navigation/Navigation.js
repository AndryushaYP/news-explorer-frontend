import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ loggedIn }) {
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
          <NavLink to="/" className="navigation__link navigation__link_type_logout">
            Андрей
          </NavLink>
        </>
      )}
    </nav>
  );
}

export default Navigation;
