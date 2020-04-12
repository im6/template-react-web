import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Hello from "../containers/hello";
import Todos from "../containers/todo";

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={Hello} />
    <Route path="/todos" component={Todos} />
  </Fragment>
);

export default Routes;
