import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import arrCard from "../../utils/arrCard";

function NewsCardList() {
  return (
    <section className="cards">
      <ul className="cards__list">
        {arrCard.map((card) => (
          <NewsCard
            key={card.id}
            img={card.img}
            keyword={card.keyword}
            title={card.title}
            text={card.text}
            link={card.link}
            source={card.source}
            date={card.date}
          />
        ))}
      </ul>
    </section>
  );
}

export default NewsCardList;
