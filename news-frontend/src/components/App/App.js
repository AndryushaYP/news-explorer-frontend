import "./App.css";
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNews from "../SavedNews/SavedNews";
import { Route, Switch } from "react-router-dom";

function App() {
  const [mainIsActive, setMainIsActive] = React.useState(false);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header className="header header__main"/>
          <Main />
          <NewsCardList />
          <About />
        </Route>
        <Route path="/saved-news">
          <Header className="header header__saved-news"/>
          <SavedNews />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
