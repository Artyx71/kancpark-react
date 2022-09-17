import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Personal from "./components/Personal/Personal";
import Properties from "./components/Properties/Properties";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Properties />
      <Personal />
    </div>
  );
}

export default App;
