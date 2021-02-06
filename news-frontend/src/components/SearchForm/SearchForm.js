import "./SearchForm.css";
import React from "react";

function SearhForm({ searchBtnClick }) {
  const searchRef = React.useRef();
  const handleClickSearchButton = (e) => {
    e.preventDefault();
    searchBtnClick(searchRef.current.value);
  };

  return (
    <form className="search-form">
      <input
        ref={searchRef}
        placeholder="Введите тему новости"
        className="search-form__input"
        required
      ></input>
      <button className="search-form__btn" onClick={handleClickSearchButton}>
        Искать
      </button>
    </form>
  );
}

export default SearhForm;
