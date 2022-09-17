import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Personal from "./components/Personal/Personal";
import Properties from "./components/Properties/Properties";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Properties />
      <Personal />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
