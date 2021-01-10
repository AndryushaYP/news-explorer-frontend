import "./NewsCard.css";
import React from "react";

function NewsCard({ img, title, text, link, source, date, keyword }) {
  const [spanVisible, setSpanVisible] = React.useState("card__span");

  const handleMouseEnter = (e) => {
    setSpanVisible("card__span card__span-active");
  };

  const handleMouseLeave = (e) => {
    setSpanVisible("card__span");
  }

  const onHandleClick = () => {
    console.log("Меня нажали");
  };

  return (
    <li className="card">
      <img src={img} alt={title} className="card__img"></img>
      <p className="card__keyword">{keyword}</p>
      <span className={spanVisible}>Убрать из сохраненных</span>
      <button
        className="card__btn-delete"
        type="submit"
        onClick={onHandleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></button>
      <div className="card__info">
        <p className="card__news-date">{date}</p>
        <h2 className="card__title">{title}</h2>
        <p className="card__text">{text}</p>
        <a href={link} className="card__source">
          {source}
        </a>
      </div>
    </li>
  );
}

export default NewsCard;
