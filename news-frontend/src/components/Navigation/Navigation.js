import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ loggedIn, isOpenMenu, onClick }) {
  return (
    <nav className={!isOpenMenu ? "navigation" : "navigation navigation_type_visible"}>
      {!loggedIn ? (
        <NavLink
          exact
          to="/"
          className="navigation__link"
          activeClassName="navigation__link_type_active"
        >
          Главная
        </NavLink>
      ) : (
        <>
          <NavLink
            exact
            to="/"
            className="navigation__link"
            activeClassName="navigation__link_type_active"
          >
            Главная
          </NavLink>
          <NavLink
            onClick={onClick}
            to="/saved-news"
            className="navigation__link"
            activeClassName="navigation__link_type_active"
          >
            Сохраненные статьи
          </NavLink>
        </>
      )}
    </nav>
  );
}

export default Navigation;
