import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNews from "../SavedNews/SavedNews";
import Preloader from "../Preloader/Preloader";
import ResultNotFound from "../ResultNotFound/ResultNotFound";
import Login from "../Login/Login";
import Register from "../Register/Register";
import SuccessRegister from "../SuccessRegister/SuccessRegister";
import * as newsApi from "../../utils/NewsApi";
import * as mainApi from "../../utils/MainApi";

function App() {
  //Стейт для модалки Авторизации
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);

  //Стейт для модалки регистрации
  const [isRegisterOpen, setIsRegisterOpen] = React.useState(false);

  //Стейт для модалки успешной регистрации

  const [isSuccessRegisterOpen, setIsSuccessRegisterOpen] = React.useState(false);

  //Стейт для изменения состояния залогинился пользователь или нет
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [newsArr, setNewsArr] = React.useState([]);

  //Массив ID сохраненных статей
  const [savedArticles, setSavedArticles] = React.useState([]);

  //Открыть модалку авторизации
  function handleAuthorizationOpen() {
    setIsSuccessRegisterOpen(false);
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  }
  //Открыть модалку регистрации
  function handleRegisterOpen() {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  }
  //Регистрация
  function handleRegister() {
    setIsRegisterOpen(false);
    setIsSuccessRegisterOpen(true);
  }

  //Поиск статей
  function searhcArticles(searchWord) {
    newsApi.getNews(searchWord).then((data) => {
      setNewsArr([
        ...data.articles.map((item, id) => {
          item.id = id;
          return item;
        }),
      ]);
    });
  }

  const handleClick = (cardId) => {
    // eslint-disable-next-line array-callback-return
    newsArr.map((item) => {
      if (item.id === cardId) {
        setSavedArticles([...savedArticles, item]);
      }
    });
  };

  //Проверка

  console.log(mainApi.getArticles());

  // Войти
  function handleLogin() {
    setLoggedIn(true);
    setIsLoginOpen(false);
  }

  // Выйти
  function logOut() {
    setLoggedIn(false);
  }

  function closeAllPopup(e) {
    if (e.target === e.currentTarget || e.key === "Escape") {
      setIsLoginOpen(false);
      setIsSuccessRegisterOpen(false);
      setIsRegisterOpen(false);
    }
  }
  return (
    <div className="App" onKeyDown={closeAllPopup}>
      <Switch>
        <Route exact path="/">
          <Header
            onAuthorizeClick={handleAuthorizationOpen}
            headerClassName="header header__main"
            loggedIn={loggedIn}
            logOut={logOut}
            onClose={closeAllPopup}
          />
          <Main searchBtnClick={searhcArticles} />
          <NewsCardList cards={newsArr} clickBtn={handleClick} />
          <Preloader />
          <ResultNotFound />

          <About />
        </Route>
        <Route path="/saved-news">
          <Header
            headerClassName="header header__saved-news"
            loggedIn={loggedIn}
            logOut={logOut}
            onClose={closeAllPopup}
          />
          <SavedNews cards={savedArticles} />
        </Route>
      </Switch>
      <Login
        isOpen={isLoginOpen}
        onClose={closeAllPopup}
        onLogin={handleLogin}
        changeModal={handleRegisterOpen}
      />
      <Register
        isOpen={isRegisterOpen}
        onClose={closeAllPopup}
        onRegister={handleRegister}
        changeModal={handleAuthorizationOpen}
      />
      <SuccessRegister
        isOpen={isSuccessRegisterOpen}
        onClose={closeAllPopup}
        changeModal={handleAuthorizationOpen}
      />
      <Footer />
    </div>
  );
}

export default App;
