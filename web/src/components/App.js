import "../stylesheets/App.scss";
import LandingPage from "./LandingPage";
import CardPage from "./CardPage";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/cardpage">
          <CardPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
