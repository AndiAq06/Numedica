import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Jumbotron from "../beranda/Jumbotron";
import Card from "../beranda/card";
import Contact from "../beranda/Contact";

const Beranda = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Jumbotron />
        <Card />
        <Contact />
      </Route>
    </Switch>
  );
};

export default Beranda;
