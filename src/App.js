import "./App.css";
import { RouteManager } from "./RouteManager";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <RouteManager />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
