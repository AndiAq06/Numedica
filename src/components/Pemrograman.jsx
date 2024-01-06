import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import ArticlePemprogramanList from "../Pemprograman/ArticlePemprogramanList";
import Synchronous from "../Pemprograman/Synchronous&Asynchronous";
import Javascript from "../Pemprograman/JavascriptvsTypescript";
const Pemrograman = () => {
  return (
    <Switch>
      <Route path="/pemrograman/article-pemprograman-list">
        <ArticlePemprogramanList />
      </Route>
      <Route path="/pemrograman/synchronous-asynchronous">
        <Synchronous />
      </Route>
      <Route path="/pemrograman/javascript-typesript">
        <Javascript />
      </Route>
    </Switch>
  );
};

export default Pemrograman;
