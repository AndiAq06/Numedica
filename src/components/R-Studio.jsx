import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import ArticleList from "../R-Studio/ArticleList";
import Boxplot from "../R-Studio/Boxplot";
import Barplot from "../R-Studio/Barplot";
import PieChart from "../R-Studio/PieChart";
import Histogram from "../R-Studio/Histogram";
import Scatter from "../R-Studio/Scatter";

const RStudio = () => {
  return (
    <Switch>
      <Route path="/r/article-r-studio-list">
        <ArticleList />
      </Route>
      <Route path="/r/boxplot-r-studio">
        <Boxplot />
      </Route>
      <Route path="/r/barplot-r-studio">
        <Barplot />
      </Route>
      <Route path="/r/pie-chart-r-studio">
        <PieChart />
      </Route>
      <Route path="/r/histogram-r-studio">
        <Histogram />
      </Route>
      <Route path="/r/scatter-plot-r-studio">
        <Scatter />
      </Route>
    </Switch>
  );
};

export default RStudio;
