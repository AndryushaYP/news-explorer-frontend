import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ loggedIn }) {
  return (
    <nav className="navigation__mobile">
      <Link to="/" className="navigation__mobile-link">
        Главная
      </Link>
      <Link to="/saved-news" className="navigation__mobile-link">
        Сохраненные статьи
      </Link>
    </nav>
  );
}

export default NavBar;
