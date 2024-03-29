/* eslint-disable react/jsx-no-target-blank */
import "./NewsCard.css";
import React from "react";
import { monthArr } from "../../utils/constants";

function NewsCard({
  location,
  img,
  title,
  text,
  link,
  source,
  date,
  keyword,
  id,
  clickBtn,
  loggedIn,
  isSave,
}) {
  const [spanClassName, setSpanClassName] = React.useState("card__span");

  const handleMouseEnter = (e) => {
    setSpanClassName("card__span card__span-active");
  };

  const handleMouseLeave = (e) => {
    setSpanClassName("card__span");
  };
  const handleClickSaveBtn = (e) => {
    clickBtn(id, isSave);
  };

  const handleClickDeleteBtn = (e) => {
    clickBtn(id);
  };

  return (
    <li className="card">
      <img src={img} alt={title} className="card__img"></img>
      <a href={link} target="_blank" className="card__source">
        {source}
      </a>
      {location.pathname === "/" && (
        <>
          {!loggedIn && <span className={spanClassName}>Войдите, чтобы сохранять статьи</span>}
          <button
            className={
              isSave ? "card__btn card__btn_type_save-active" : "card__btn card__btn_type_save"
            }
            onClick={handleClickSaveBtn}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></button>
        </>
      )}

      {location.pathname === "/saved-news" && (
        <>
          <p className="card__keyword">{keyword}</p>
          <span className={spanClassName}>Убрать из сохраненных</span>
          <button
            className="card__btn card__btn-delete"
            onClick={handleClickDeleteBtn}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></button>
        </>
      )}

      <div className="card__info">
        <p className="card__news-date">{`${new Date(date).getDate()} ${
          monthArr[new Date(date).getMonth()]
        }, ${new Date(date).getFullYear()}`}</p>
        <h2 className="card__title">{title}</h2>
        <p className="card__text">{text}</p>
      </div>
    </li>
  );
}

export default NewsCard;
