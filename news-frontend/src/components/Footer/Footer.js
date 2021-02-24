import "./Footer.css";
import githubIcon from "../../images/github-icon.svg";
import faceBookIcon from "../../images/facebook-icon.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2020 Supresite, Powered by News API</p>
      <nav className="footer__navigation">
        <div className="footer__navigation-column-link">
          <Link className="footer__link" to="/">
            Главная
          </Link>
          <a
            href="https://praktikum.yandex.ru/"
            rel="noreferrer"
            target="_blank"
            className="footer__link"
          >
            Яндекс.Практикум
          </a>
        </div>

        <div className="footer__social-link">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="footer__link">
            <img className="footer__link-icon" alt="Иконка Гитхаба" src={githubIcon} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer__link">
            <img className="footer__link-icon" alt="Иконка Гитхаба" src={faceBookIcon} />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
