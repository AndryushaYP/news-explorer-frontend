import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import Button from "../ui/Button";
import React from "react";
import { Route, Switch } from "react-router-dom";

function NewsCardList({ cardsClassName, cards, clickBtn }) {
  const [buttonClick, setButtonClick] = React.useState(false);

  const handleButton = () => {
    console.log("меня нажали!");
    setButtonClick(true);
  };

  return (
    <section className={cards.length > 0 ? `cards ${cardsClassName}` : "cards cards__invisible"}>
      <Switch>
        <Route exact path="/">
          <h1 className="cards__title">Результаты поиска</h1>

          <ul className="cards__list">
            {!buttonClick
              ? cards
                  .slice(0, 3)
                  .map((card, i) => (
                    <NewsCard
                      clickBtn={clickBtn}
                      key={i}
                      img={card.urlToImage}
                      title={card.title}
                      text={card.description}
                      link={card.url}
                      source={card.source.name}
                      date={card.publishedAt}
                      keyword={card.source.name}
                      id={card.id}
                    />
                  ))
              : cards.map((card, i) => (
                  <NewsCard
                    clickBtn={clickBtn}
                    key={i}
                    img={card.urlToImage}
                    title={card.title}
                    text={card.description}
                    link={card.url}
                    source={card.source.name}
                    date={card.publishedAt}
                    keyword={card.source.name}
                    id={card.id}
                  />
                ))}
          </ul>
          <Button onClick={handleButton} name="Показать ещё" className="button button__main" />
        </Route>

        <Route path="/saved-news">
          <ul className="cards__list">
            {cards.map((card, i) => (
              <NewsCard
                clickBtn={clickBtn}
                key={i}
                id={card.id}
                img={card.urlToImage}
                title={card.title}
                text={card.description}
                link={card.url}
                source={card.source.name}
                date={card.publishedAt}
                keyword={card.source.name}
              />
            ))}
          </ul>
        </Route>
      </Switch>
    </section>
  );
}

export default NewsCardList;
