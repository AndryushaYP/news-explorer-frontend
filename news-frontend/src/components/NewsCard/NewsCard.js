/* eslint-disable react/jsx-no-target-blank */
import "./NewsCard.css";
import React from "react";
import { monthArr } from "../../utils/constants";
import { Route, Switch } from "react-router-dom";

function NewsCard({ img, title, text, link, source, date, keyword, id, clickBtn }) {
  const [spanClassName, setSpanClassName] = React.useState("card__span");

  const handleMouseEnter = (e) => {
    setSpanClassName("card__span card__span-active");
  };

  const handleMouseLeave = (e) => {
    setSpanClassName("card__span");
  };
  const handleClickSaveBtn = (e) => {
    e.target.classList.remove("card__btn_type_save");
    e.target.classList.add("card__btn_type_save-active");
    clickBtn(id);
  };

  const handleClickDeleteBtn = (e) => {
    clickBtn(id);
  }

  return (
    <li className="card">
      <img src={img} alt={title} className="card__img"></img>
      <a href={link} target="_blank" className="card__source">
        {source}
      </a>
      <Switch>
        <Route exact path="/">
          <span className={spanClassName}>Войдите, чтобы сохранять статьи</span>
          <button
            className="card__btn card__btn_type_save"
            onClick={handleClickSaveBtn}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></button>
        </Route>

        <Route path="/saved-news">
          <p className="card__keyword">{keyword}</p>
          <span className={spanClassName}>Убрать из сохраненных</span>
          <button
            className="card__btn card__btn-delete"
            onClick={handleClickDeleteBtn}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></button>
        </Route>
      </Switch>

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
