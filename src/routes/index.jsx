import React from "react";
import { Route, Switch } from "react-router-dom";
import Hello from "../containers/hello";
import Todos from "../containers/todo";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Hello} />
    <Route path="todos" component={Todos} />
  </Switch>
);

export default Routes;
