import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Personal from "./components/Personal";
import Properties from "./components/Properties";

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
