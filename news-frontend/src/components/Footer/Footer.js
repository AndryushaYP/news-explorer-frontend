import "./Footer.css";
import githubIcon from "../../images/github-icon.svg";
import faceBookIcon from "../../images/facebook-icon.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__copyright">&copy; 2020 Supresite, Powered by News API</p>
      <nav className="footer__navigation">
        <Link className="footer__link" to="/">
          Главная
        </Link>
        <a href="https://yandex.ru" className="footer__link">
          Яндекс.Практикум
        </a>
        <a href="https://github.com" className="footer__link">
          <img className="footer__link-icon" alt="Иконка Гитхаба" src={githubIcon} />
        </a>
        <a href="https://facebook.com" className="footer__link">
          <img className="footer__link-icon" alt="Иконка Гитхаба" src={faceBookIcon} />
        </a>
      </nav>
    </div>
  );
}

export default Footer;
