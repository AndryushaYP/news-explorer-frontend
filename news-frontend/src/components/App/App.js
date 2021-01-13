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
import arrCard from "../../utils/arrCard";
import Login from "../Login/Login";

function App() {
  //Стейт для модалки Авторизации
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);

  //Стейт для модалки регистрации
  /* const [isRegisterOpen, setIsRegisterOpen] = React.useState(false); */

  //Стейт для изменения состояния залогинился пользователь или нет
  const [loggedIn, setLoggedIn] = React.useState(false);

  function handleAuthorizationOpen() {
    setIsLoginOpen(true);
  }

  // Войти
  function handleLogin() {
    setLoggedIn(true);
    setIsLoginOpen(false);
  }

  // Выйти
  function logOut() {
    setLoggedIn(false);
  }

  console.log(loggedIn);
  function closeAllPopup(e) {
    if (e.target === e.currentTarget || e.key === "Escape") {
      setIsLoginOpen(false);
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
          />
          <Main />
          <Preloader />
          <ResultNotFound />
          <NewsCardList />
          <About />
        </Route>
        <Route path="/saved-news">
          <Header headerClassName="header header__saved-news" loggedIn={loggedIn} logOut={logOut} />
          <SavedNews cards={arrCard} />
        </Route>
      </Switch>
      <Login isOpen={isLoginOpen} onClose={closeAllPopup} onLogin={handleLogin} />
      <Footer />
    </div>
  );
}

export default App;
