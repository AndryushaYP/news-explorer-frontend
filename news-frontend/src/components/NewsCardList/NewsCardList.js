import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import Button from "../ui/Button";
import React from "react";
import { Route, Switch } from "react-router-dom";

function NewsCardList({ cardsClassName, cards, clickBtn }) {
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
      <Switch>
        <Route exact path="/">
          <h1 className="cards__title">Результаты поиска</h1>

          <ul className="cards__list">
            {cards.slice(0, clickСounter).map((card, i) => (
              <NewsCard
                clickBtn={clickBtn}
                key={i}
                img={card.urlToImage}
                title={card.title}
                text={card.description}
                link={card.url}
                source={card.source.name}
                date={card.publishedAt}
                keyword={card.keyword}
                id={card.id}
              />
            ))}
          </ul>
        </Route>

        <Route path="/saved-news">
          <ul className="cards__list">
            {cards.slice(0, clickСounter).map((card, i) => (
              <NewsCard
                clickBtn={clickBtn}
                key={i}
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
        </Route>
      </Switch>
      {!hideButton && (
        <Button onClick={handleButton} name="Показать ещё" className="button button__main" />
      )}
    </section>
  );
}

export default NewsCardList;
