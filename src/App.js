import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./component/Routes.js";
import Htmlcss from "../src/component/htmlcss.jsx";
import Arrayoperation from "../src/component/tasklogicalpart.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
