import "./Main.css";
import SearhForm from '../SearchForm/SearchForm';

function Main() {

  return (
    <div className="main">
      <h1 className="main__title">Что творится в мире?</h1>
      <p className="main__description">Находите самые свежие статьи на любую тему</p>
      <SearhForm />
    </div>
  );
}

export default Main;