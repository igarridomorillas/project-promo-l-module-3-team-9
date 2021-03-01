import "../stylesheets/App.scss";
import LandingPage from "./LandingPage";
import CardPage from "./CardPage";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/">
          <CardPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
