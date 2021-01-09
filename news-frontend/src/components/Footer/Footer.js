import "./Footer.css";
import githubIcon from "../../images/github-icon.svg";
import faceBookIcon from "../../images/facebook-icon.svg";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__copyright">&copy; 2020 Supresite, Powered by News API</p>
      <nav className="footer__navigation">
        <p className="footer__link">
          Главная
        </p>
        <a href="https://yandex.ru" className="footer__link">
          Яндекс.Практикум
        </a>
        <a href="https://github.com" className="footer__link">
          <img alt="Иконка Гитхаба" src={githubIcon} />
        </a>
        <a href="https://facebook.com" className="footer__link">
          <img alt="Иконка Гитхаба" src={faceBookIcon} />
        </a>
      </nav>
    </div>
  );
}

export default Footer;
