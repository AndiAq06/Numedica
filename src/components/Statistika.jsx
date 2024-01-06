import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import ArticleStatistikaList from "../Statistika/ArticleStatistikaList";
import Parametrik from "../Statistika/Parametrik";
import Statistik from "../Statistika/Statistik";
import Descriptive from "../Statistika/Descriptive";
import NonSamplingError from "../Statistika/NonSamplingError";
import SamplingError from "../Statistika/SamplingError";

const Statistika = () => {
  return (
    <Switch>
      <Route path="/statistika/article-statistika">
        <ArticleStatistikaList />
      </Route>
      <Route path="/statistika/statistik">
        <Statistik />
      </Route>
      <Route path="/statistika/parametrik-nonparametrik">
        <Parametrik />
      </Route>
      <Route path="/statistika/descriptive-inferensia">
        <Descriptive />
      </Route>
      <Route path="/statistika/sampling-error">
        <SamplingError />
      </Route>
      <Route path="/statistika/non-sampling-error">
        <NonSamplingError />
      </Route>
    </Switch>
  );
};

export default Statistika;
