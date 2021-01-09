import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Footer />
      <NewsCardList />
    </div>
  );
}

export default App;
