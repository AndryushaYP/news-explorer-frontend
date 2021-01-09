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
      <Header />
      <Main />
      <NewsCardList />
      <About />
      <SavedNews />
      <Footer />
    </div>
  );
}

export default App;
