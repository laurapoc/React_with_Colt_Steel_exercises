import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Soda from "./Soda";
import "./App.css";
import Chips from "./Chips";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/soda" component={Soda} />
        <Route exact path="/chips" component={Chips} />
      </Switch>
    </div>
  );
}

export default App;
