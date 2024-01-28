import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import ArticleList from "../Kedokteran/ArticleKedokteranList";
import Glaukoma from "../Kedokteran/Glaukoma";
import Blefaritis from "../Kedokteran/Blefaritis";
import Entropion from "../Kedokteran/Entropion";
import Ektropion from "../Kedokteran/Ektropion";
import Hordeolum from "../Kedokteran/Hordeolum";
import Pterigium from "../Kedokteran/Pterigium";
import Pinguekulitis from "../Kedokteran/Pinguekulitis";

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
      <Route path="/kedokteran/hordeolum">
        <Hordeolum />
      </Route>
      <Route path="/kedokteran/pterigium">
        <Pterigium />
      </Route>
      <Route path="/kedokteran/pinguekulitis">
        <Pinguekulitis />
      </Route>
    </Switch>
  );
};

export default Kedokteran;
