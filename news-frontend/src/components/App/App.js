import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  //Контекст
  const [currentUser, setCurrentUser] = React.useState({ email: "", id: "", name: "" });
  const location = useLocation();
  const history = useHistory();
  //Данные текущего пользователя

  // Если по запросу ничего не найдено
  const [searchNotFound, setSearchNotFound] = React.useState(false);
  // Стэйт для Preloader
  const [isLoading, setIsLoading] = React.useState(false);
  const [dataUser, setDataUser] = React.useState({ email: "", name: "" });
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

  //Проверяем токен при загрузке страницы

  React.useEffect(() => {
    tokenCheck();
    handleClickSaveArticle();
    if (localStorage.arrArticles) {
      setNewsArr(JSON.parse(localStorage.getItem("arrArticles")));
    }

    mainApi
      .getUserMe()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn]);

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

  //Проверяем токен
  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi.getContent(jwt).then((res) => {
        if (res) {
          setDataUser({ email: res.email, name: res.name });
          setLoggedIn(true);
        }
      });
    }
  };

  // Выход из аккаунта

  const signOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("arrArticles");
    setDataUser({});
    setLoggedIn(false);
    history.push("/");
  };

  //Загружаем список статей из БД
  const handleClickSaveArticle = () => {
    mainApi
      .getArticles()
      .then((res) => {
        setSavedArticles(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Поиск статей
  function searhcArticles(searchWord) {
    localStorage.removeItem("arrArticles");
    setNewsArr([]);
    setIsLoading(true);
    newsApi
      .getNews(searchWord)
      .then((data) => {
        if (data.articles.length > 0) {
          setSearchNotFound(false);
          localStorage.setItem(
            "arrArticles",
            JSON.stringify(
              data.articles.map((item, id) => ({
                _id: id,
                isSave: false,
                keyword: searchWord,
                title: item.title,
                text: item.description,
                date: item.publishedAt,
                source: item.source.name,
                link: item.url,
                image: item.urlToImage,
              }))
            )
          );
          const localStoregeArticles = JSON.parse(localStorage.getItem("arrArticles"));
          setNewsArr(localStoregeArticles);
        } else {
          setSearchNotFound(true);
          setNewsArr([]);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  // Сохраняем статью
  const handleSaveArticle = (cardId, isSave) => {
    if (isSave === false) {
      // eslint-disable-next-line array-callback-return
      newsArr.map((item) => {
        if (item._id === cardId) {
          mainApi
            .saveArticle({
              keyword: item.keyword,
              title: item.title,
              text: item.text,
              date: item.date,
              source: item.source,
              link: item.link,
              image: item.image,
            })
            .then((cardData) => {
              item._id = cardData.id;
              setSavedArticles([...savedArticles, cardData]);
            })
            .catch((err) => {
              console.log(err);
            });

          item.isSave = !item.isSave;
        }
      });
    } else {
      // eslint-disable-next-line array-callback-return
      newsArr.map((item) => {
        if (item._id === cardId) {
          handleDeleteArticle(cardId);
          item.isSave = !item.isSave;
        }
      });
    }
  };

  //Удалить статью
  const handleDeleteArticle = (cardId) => {
    mainApi
      .deleteArticle(cardId)
      .then((cardData) => {
        const newArr = savedArticles.filter((cardEl) => {
          return cardEl._id !== cardData._id;
        });
        setSavedArticles(newArr);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line array-callback-return
    newsArr.map((item) => {
      if (item._id === cardId) {
        item.isSave = !item.isSave;
      }
    });
  };

  function closeAllPopup(e) {
    if (e.target === e.currentTarget || e.key === "Escape") {
      setIsLoginOpen(false);
      setIsSuccessRegisterOpen(false);
      setIsRegisterOpen(false);
    }
  }

  return (
    <div className="App" onKeyDown={closeAllPopup}>
      <Header
        location={location}
        onClick={handleClickSaveArticle}
        onAuthorizeClick={handleAuthorizationOpen}
        loggedIn={loggedIn}
        logOut={signOut}
        onClose={closeAllPopup}
        name={dataUser.name}
      />
      <Switch>
        <CurrentUserContext.Provider value={currentUser}>
          <Route exact path="/">
            <Main searchBtnClick={searhcArticles} />
            <NewsCardList
              cards={newsArr}
              clickBtn={handleSaveArticle}
              loggedIn={loggedIn}
              location={location}
            />
            {isLoading && <Preloader />}
            {searchNotFound && <ResultNotFound />}

            <About />
          </Route>
          <ProtectedRoute
            path="/saved-news"
            component={SavedNews}
            cards={savedArticles}
            name={dataUser.name}
            clickBtn={handleDeleteArticle}
            location={location}
            loggedIn={loggedIn}
          />

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
