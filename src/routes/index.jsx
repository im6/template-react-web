import React from 'react';
import { Route } from 'react-router-dom';
import Hello from '../containers/hello';
import Todos from '../containers/todo';

const Routes = () => (
  <>
    <Route exact path="/" component={Hello} />
    <Route path="/todos" component={Todos} />
  </>
);

export default Routes;
