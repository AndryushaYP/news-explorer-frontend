import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

import "./SavedNews.css";

function SavedNews({ cards, name }) {
  return (
    <>
      <SavedNewsHeader cards={cards} name={name} />
      <NewsCardList cardsClassName="cards_type_saved-news" cards={cards} />
    </>
  );
}

export default SavedNews;
