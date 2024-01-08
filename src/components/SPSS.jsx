import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import ArticleSPSSList from "../SPSS/ArticleSPSSList";
import Steam from "../SPSS/Steam-Leaf";
import BoxplotSPSS from "../SPSS/BoxplotSPSS";
import Dotplot from "../SPSS/Dotplot";
import HistogramSPSS from "../SPSS/HistogramSPSS";
import PieChartSPSS from "../SPSS/PieChartSPSS";
import ScatterSPSS from "../SPSS/ScatterSPSS";

const SPSS = () => {
  return (
    <Switch>
      <Route path="/spss/article-spss">
        <ArticleSPSSList />
      </Route>
      <Route path="/spss/dot-plot-spss">
        <Dotplot />
      </Route>
      <Route path="/spss/steam-leaf-spss">
        <Steam />
      </Route>
      <Route path="/spss/boxplot-spss">
        <BoxplotSPSS />
      </Route>
      <Route path="/spss/histogram-spss">
        <HistogramSPSS />
      </Route>
      <Route path="/spss/pie-chart-spss">
        <PieChartSPSS />
      </Route>
      <Route path="/spss/scatter-plot-spss">
        <ScatterSPSS />
      </Route>
    </Switch>
  );
};

export default SPSS;
