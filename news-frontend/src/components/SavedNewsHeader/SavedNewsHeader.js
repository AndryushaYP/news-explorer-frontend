import "./SavedNewsHeader.css";

function SavedNewsHeader({ cards }) {
  console.log(cards);
  return (
    <section className="saved-news-header">
      <h1 className="saved-news__title">Сохраненные статьи</h1>
      {cards.length > 0 ? (
        <>
          {" "}
          <p className="saved-news__quantity">Грета, у вас {cards.length} сохранённых статей</p>
          <p className="saved-news__keyword">
            По ключевым словам:
            <span className="saved-news__keyword-bold">
              {" " + cards[1].source.name + ", " + cards[2].source.name} и {cards.length - 2}-м
              другим
            </span>
          </p>
        </>
      ) : (
        <p className="saved-news__quantity">Грета, у вас 0 сохранённых статей</p>
      )}
    </section>
  );
}

export default SavedNewsHeader;
