import "./SearchForm.css";

function SearhForm() {
  return (
    <form className="search-form">
      <input placeholder="Введите тему новости" className="search-form__input" required></input>
      <button className="search-form__btn">Искать</button>
    </form>
  );
}

export default SearhForm;
