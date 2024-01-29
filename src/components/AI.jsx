import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import ArticleAIList from "../AI/ArtcleAIList";
import ArtificialIntelligence from "../AI/ArtificialIntelligence";
import Supervised from "../AI/Supervised";
import AI_ML_DL from "../AI/AI_ML_DL";
import Uninformed from "../AI/Uninformed";

const AI = () => {
  return (
    <Switch>
      <Route path="/ai/article-artificial-intelligence">
        <ArticleAIList />
      </Route>
      <Route path="/ai/artificial-intelligence">
        <ArtificialIntelligence />
      </Route>
      <Route path="/ai/supervised-vs-unsupervised-learning">
        <Supervised />
      </Route>
      <Route path="/ai/ai-ml-dl">
        <AI_ML_DL />
      </Route>
      <Route path="/ai/uninformed-search-algorithms">
        <Uninformed />
      </Route>
    </Switch>
  );
};

export default AI;
