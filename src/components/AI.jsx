import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import ArticleAIList from "../AI/ArtcleAIList";
import ArtificialIntelligence from "../AI/ArtificialIntelligence";

const AI = () => {
  return (
    <Switch>
      <Route path="/ai/article-artificial-intelligence">
        <ArticleAIList />
      </Route>
      <Route path="/ai/artificial-intelligence">
        <ArtificialIntelligence />
      </Route>
    </Switch>
  );
};

export default AI;
