import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header headerClassName="header header__main" />
          <Main />
          <NewsCardList />
          <About />
        </Route>
        <Route path="/saved-news">
          <Header headerClassName="header header__saved-news" />
          <SavedNews />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
