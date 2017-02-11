import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../modules/app';
import Todos from '../modules/todos';
import Users from '../modules/users';
import ErrorPage from '../modules/errorPage';
import Hello from '../modules/hello';


const Routes = ({ history, store }) =>
  <Router history={history} >
    <Route path="/" component={App}>
      <IndexRoute component={Hello}/>
      <Route path="todos" component={Todos}/>
      <Route path="users" component={Users} />
      <Route path="*" component={ErrorPage} />
    </Route>
  </Router>;

Routes.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default Routes;
