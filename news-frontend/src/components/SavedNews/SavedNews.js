import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

import "./SavedNews.css";

function SavedNews({ cards, name, clickBtn, location }) {
  return (
    <>
      <SavedNewsHeader cards={cards} name={name} />
      <NewsCardList
        cardsClassName="cards_type_saved-news"
        cards={cards}
        clickBtn={clickBtn}
        location={location}
      />
    </>
  );
}

export default SavedNews;
