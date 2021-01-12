import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

import "./SavedNews.css";

function SavedNews({ cards }) {
  return (
    <>
      <SavedNewsHeader cards={cards} />
      <NewsCardList />
    </>
  );
}

export default SavedNews;
