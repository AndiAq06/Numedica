import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import ArticleList from "../Kedokteran/ArticleKedokteranList";
import Glaukoma from "../Kedokteran/Glaukoma";
import Blefaritis from "../Kedokteran/Blefaritis";
import Entropion from "../Kedokteran/Entropion";
import Ektropion from "../Kedokteran/Ektropion";

const Kedokteran = () => {
  return (
    <Switch>
      <Route path="/kedokteran/article-kedokteran-list">
        <ArticleList />
      </Route>
      <Route path="/kedokteran/glaukoma">
        <Glaukoma />
      </Route>
      <Route path="/kedokteran/blefaritis">
        <Blefaritis />
      </Route>
      <Route path="/kedokteran/entropion">
        <Entropion />
      </Route>
      <Route path="/kedokteran/ektropion">
        <Ektropion />
      </Route>
    </Switch>
  );
};

export default Kedokteran;
