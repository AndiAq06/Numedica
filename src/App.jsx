import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Beranda from "./components/Beranda.jsx";
import RStudio from "./components/R-Studio.jsx";
import Pemrograman from "./components/Pemrograman.jsx";
import Kedokteran from "./components/Kedokteran.jsx";
import SPSS from "./components/SPSS.jsx";
import { StaticRouter } from "react-router-dom/cjs/react-router-dom.js";
import Statistika from "./components/Statistika.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <div className="beranda">
            <Beranda />
          </div>
          <div className="R-Studio">
            <RStudio />
          </div>
          <div className="spss">
            <SPSS />
          </div>
          <div className="statistika">
            <Statistika />
          </div>
          <div className="Kedokteran">
            <Kedokteran />
          </div>
          <div className="pemprograman">
            <Pemrograman />
          </div>
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
}

export default App;
