import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UseState from "./components/Hooks/useState";
import Restaurant from "./components/basic/Restaurant";
import UseEffect from "./components/Hooks/useEffect";
import Header from "./Header";
import UseReducer from "./components/Hooks/useReducer";
import TodoApp from "./components/ReactTodo/TodoApp";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
        </div>
        <Switch>
          <Route exact path="/restaurant" component={Header} />
          {/* <Route exact path="/weather_app" component={} /> */}
          <Route path="/useState" component={UseState} />
          <Route path="/useEffect" component={UseEffect} />
          <Route path="/useReducer" component={UseReducer} />
          <Route exact path="/todo_app" component={TodoApp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
