import "./SavedNewsHeader.css";
import React from "react";
import { getKeywords } from "../../utils/getKeyword";

function SavedNewsHeader({ cards, name }) {
  const newArr = getKeywords(cards);

  return (
    <section className="saved-news-header">
      <h1 className="saved-news__title">Сохраненные статьи</h1>
      {newArr.length > 2 ? (
        <>
          {" "}
          <p className="saved-news__quantity">
            {name}, у вас {cards.length} сохранённых статей
          </p>
          <p className="saved-news__keyword">
            По ключевым словам:
            <span className="saved-news__keyword-bold">{` ${newArr[0].name}, ${newArr[1].name} и ${
              newArr.length - 2
            }-м другим`}</span>
          </p>
        </>
      ) : newArr.length === 2 ? (
        <>
          {" "}
          <p className="saved-news__quantity">
            {name}, у вас {cards.length} сохранённых статей
          </p>
          <p className="saved-news__keyword">
            По ключевым словам:
            <span className="saved-news__keyword-bold">{` ${newArr[0].name}, ${newArr[1].name}`}</span>
          </p>
        </>
      ) : newArr.length === 1 ? (
        <>
          {" "}
          <p className="saved-news__quantity">
            {name}, у вас {cards.length} сохранённых статей
          </p>
          <p className="saved-news__keyword">
            По ключевым словам:
            <span className="saved-news__keyword-bold">{newArr[0].name}</span>
          </p>
        </>
      ) : (
        <p className="saved-news__quantity">{name}, у вас 0 сохранённых статей</p>
      )}
    </section>
  );
}

export default SavedNewsHeader;
