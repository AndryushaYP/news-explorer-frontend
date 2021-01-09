import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews() {
  return (
    <>
      <section className="saved-news">
        <h1 className="saved-news__title">Сохраненные статьи</h1>
        <p className="saved-news__quantity">Грета, у вас 5 сохранённых статей</p>
        <p className="saved-news__keyword">
          По ключевым словам: <span className="saved-news__keyword-bold">Природа, Тайга и 2-м другим</span>
        </p>
      </section>
      <NewsCardList />
    </>
  );
}

export default SavedNews;
