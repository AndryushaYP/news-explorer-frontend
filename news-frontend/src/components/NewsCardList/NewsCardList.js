import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import Button from "../ui/Button";
import React from "react";

function NewsCardList({ location, cardsClassName, cards, clickBtn, loggedIn }) {
  const [clickСounter, setClickСounter] = React.useState(3);
  const [hideButton, setHideButton] = React.useState(false);

  const handleButton = () => {
    setClickСounter(clickСounter + 3);
    if (clickСounter >= cards.length) {
      setHideButton(true);
    }
  };

  return (
    <section className={cards.length > 0 ? `cards ${cardsClassName}` : "cards cards__invisible"}>
      {location.pathname === "/" && <h1 className="cards__title">Результаты поиска</h1>}
      <ul className="cards__list">
        {cards.slice(0, clickСounter).map((card, i) => (
          <NewsCard
            location={location}
            loggedIn={loggedIn}
            clickBtn={clickBtn}
            key={i}
            isSave={card.isSave}
            id={card._id}
            img={card.image}
            title={card.title}
            text={card.text}
            link={card.url}
            source={card.source}
            date={card.date}
            keyword={card.keyword}
          />
        ))}
      </ul>
      {!hideButton && (
        <Button onClick={handleButton} name="Показать ещё" className="button button__main" />
      )}
    </section>
  );
}

export default NewsCardList;
