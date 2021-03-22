import { Route, Switch } from "react-router-dom";
import "./App.css";
import Chips from "./Chips";
import NavBar from "./NavBar";
import Sardines from "./Sardines";
import Soda from "./Soda";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/soda" render={() => <Soda />} />
        <Route exact path="/sardines" render={() => <Sardines />} />
        <Route exact path="/chips" render={() => <Chips />} />
        <Route exact path="/" render={() => <VendingMachine />} />
      </Switch>

      {/* <Route exact path="/chips" component={Chips}/>
      <Route exact path="/sardines" component={Sardines}/>
      <Route exact path="/soda" component={Soda}/> */}
    </div>
  );
}

export default App;
