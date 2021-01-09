import "./NewsCard.css";
import btnDelete from "../../images/trash.svg"

function NewsCard({ img, title, text, link, source, date, keyword }) {
  return (
    <li className="card">
      <img src={img} alt={title} className="card__img"></img>
      <p className="card__keyword">{keyword}</p>
      <button className="card__btn-delete" type="submit"><img alt="Кнопка в виде корзинки" src={btnDelete}/></button>
      <div className="card__info">
        <p className="card__news-date">{date}</p>
        <h2 className="card__title">{title}</h2>
        <p className="card__text">{text}</p>
        <a href={link} className="card__source">{source}</a>
      </div>
    </li>
  );
}

export default NewsCard;
