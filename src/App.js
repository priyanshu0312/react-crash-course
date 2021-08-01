import "./App.css";
import UseState from "./components/Hooks/useState";
import Restaurant from "./components/basic/Restaurant";
import UseEffect from "./components/Hooks/useEffect";
import Header from "./Header";
import UseReducer from "./components/Hooks/useReducer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header/>
        </div>
        <Switch>
        <Route exact path="/" component={Header} />
          <Route exact path="/restaurant" component={Restaurant} />
          <Route path="/useState" component={UseState} />
          <Route path="/useEffect" component={UseEffect} />
          <Route path="/useReducer" component={UseReducer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
