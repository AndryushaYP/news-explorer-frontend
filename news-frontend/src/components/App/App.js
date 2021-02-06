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
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as newsApi from "../../utils/NewsApi";
import * as mainApi from "../../utils/MainApi";

function App() {
  //Контекст
  const [currentUser, setCurrentUser] = React.useState({});
  //Стейт для изменения состояния залогинился пользователь или нет
  const [loggedIn, setLoggedIn] = React.useState(false);

  //Стейт для модалки Авторизации
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);

  //Стейт для модалки регистрации
  const [isRegisterOpen, setIsRegisterOpen] = React.useState(false);

  //Стейт для модалки успешной регистрации

  const [isSuccessRegisterOpen, setIsSuccessRegisterOpen] = React.useState(false);
  //массив статей
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
  const handleRegister = (email, password, name) => {
    mainApi
      .register(email, password, name)
      .then((data) => {
        if (data.email) {
          setCurrentUser(data); //Если пришёл ответ, то обновляем данные
          setIsSuccessRegisterOpen(true); // и открываем модалку успешной регистрации
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Авторизация
  const handleLogin = (email, password) => {
    mainApi
      .login(email, password)
      .then((data) => {
        if (data.token) {
          //Если в ответе сервера есть токен
          localStorage.setItem("jwt", data.token); // то сохраняем его в локальном хранилище
          setLoggedIn(true); // и меняем состояние на "авторизован"
          setIsLoginOpen(false); //закрываем модалку авторизации
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <CurrentUserContext.Provider value={currentUser}>
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
        </CurrentUserContext.Provider>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
