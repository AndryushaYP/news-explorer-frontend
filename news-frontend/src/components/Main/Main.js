import "./Main.css";
import SearhForm from '../SearchForm/SearchForm';

function Main({searchBtnClick}) {

  return (
    <div className="main">
      <h1 className="main__title">Что творится в мире?</h1>
      <p className="main__description">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <SearhForm searchBtnClick={searchBtnClick}/>
    </div>
  );
}

export default Main;