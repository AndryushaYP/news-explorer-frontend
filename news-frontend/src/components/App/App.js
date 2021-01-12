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
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);

  function handleAuthorizationOpen() {
    setIsLoginOpen(true);
  }

  function closeAllPopup() {
    setIsLoginOpen(false);
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header
            onAuthorizeClick={handleAuthorizationOpen}
            headerClassName="header header__main"
          />
          <Main />
          <Preloader />
          <ResultNotFound />
          <NewsCardList />
          <About />
        </Route>
        <Route path="/saved-news">
          <Header headerClassName="header header__saved-news" />
          <SavedNews cards={arrCard} />
        </Route>
      </Switch>
      <Login isOpen={isLoginOpen} onClose={closeAllPopup} />
      <Footer />
    </div>
  );
}

export default App;
