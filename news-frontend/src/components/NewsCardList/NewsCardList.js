import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import arrCard from "../../utils/arrCard";
import Button from "../ui/Button";
import React from "react";
import { Route, Switch } from "react-router-dom";

function NewsCardList() {
  const [buttonClick, setButtonClick] = React.useState(false);

  const handleButton = () => {
    console.log("меня нажали!");
    setButtonClick(true);
  };
  return (
    <section className="cards">
      <Switch>
        <Route exact path="/">
          <h1 className="cards__title">Результаты поиска</h1>

          <ul className="cards__list">
            {!buttonClick
              ? arrCard
                  .slice(0, 3)
                  .map((card) => (
                    <NewsCard
                      key={card.id}
                      img={card.img}
                      title={card.title}
                      text={card.text}
                      link={card.link}
                      source={card.source}
                      date={card.date}
                      keyword={card.keyword}
                    />
                  ))
              : arrCard.map((card) => (
                  <NewsCard
                    key={card.id}
                    img={card.img}
                    title={card.title}
                    text={card.text}
                    link={card.link}
                    source={card.source}
                    date={card.date}
                    keyword={card.keyword}
                  />
                ))}
          </ul>
          <Button onClick={handleButton} name="Показать ещё" className="button button__main" />
        </Route>

        <Route path="/saved-news">
          <ul className="cards__list">
            {arrCard.map((card) => (
              <NewsCard
                key={card.id}
                img={card.img}
                title={card.title}
                text={card.text}
                link={card.link}
                source={card.source}
                date={card.date}
                keyword={card.keyword}
              />
            ))}
          </ul>
        </Route>
      </Switch>
    </section>
  );
}

export default NewsCardList;
