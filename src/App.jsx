import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Jumbotron from "./beranda/Jumbotron";
import Card from "./beranda/card";
import Contact from "./beranda/Contact";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Boxplot from "./R-Studio/Boxplot";
import ArticleList from "./R-Studio/ArticleList";
import ArticleKedokteranList from "./Kedokteran/ArticleKedokteranList";
import Glaukoma from "./Kedokteran/Glaukoma";
import Barplot from "./R-Studio/Barplot";
import ArticleSPSSList from "./SPSS/ArticleSPSSList";
import Steam from "./SPSS/Steam-Leaf.jsx";
import PieChart from "./R-Studio/PieChart.jsx";
import BoxplotSPSS from "./SPSS/BoxplotSPSS.jsx";
import Blefaritis from "./Kedokteran/Blefaritis.jsx";
import Entropion from "./Kedokteran/Entropion.jsx";
import ArticlePemprogramanList from "./Pemprograman/ArticlePemprogramanList.jsx";
import Synchronous from "./Pemprograman/Synchronous&Asynchronous.jsx";
import Javascript from "./Pemprograman/JavascriptvsTypescript.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <div className="beranda">
            <Switch>
              <Route exact path="/">
                <Jumbotron></Jumbotron>
                <Card></Card>
                <Contact></Contact>
              </Route>
            </Switch>
          </div>
          <div className="R-Studio">
            <Switch>
              <Route path="/article-r-studio-list">
                <ArticleList></ArticleList>
              </Route>
              <Route path="/boxplot-r-studio">
                <Boxplot></Boxplot>
              </Route>
              <Route path="/barplot-r-studio">
                <Barplot></Barplot>
              </Route>
              <Route path="/pie-chart-r-studio">
                <PieChart></PieChart>
              </Route>
            </Switch>
          </div>
          <div className="spss">
            <Switch>
              <Route path="/article-spss">
                <ArticleSPSSList></ArticleSPSSList>
              </Route>
              <Route path="/steam-leaf-spss">
                <Steam></Steam>
              </Route>
              <Route path="/boxplot-spss">
                <BoxplotSPSS></BoxplotSPSS>
              </Route>
            </Switch>
          </div>
          <div className="Kedokteran">
            <Switch>
              <Route path="/article-kedokteran-list">
                <ArticleKedokteranList></ArticleKedokteranList>
              </Route>
              <Route path="/glaukoma">
                <Glaukoma></Glaukoma>
              </Route>
              <Route path="/blefaritis">
                <Blefaritis></Blefaritis>
              </Route>
              <Route path="/entropion">
                <Entropion></Entropion>
              </Route>
            </Switch>
          </div>
          <div className="pemprograman">
            <Switch>
              <Route path="/article-pemprograman-list">
                <ArticlePemprogramanList></ArticlePemprogramanList>
              </Route>
              <Route path="/synchronous-asynchronous">
                <Synchronous></Synchronous>
              </Route>
              <Route path="/javascript-typesript">
                <Javascript></Javascript>
              </Route>
            </Switch>
          </div>
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
}

export default App;
