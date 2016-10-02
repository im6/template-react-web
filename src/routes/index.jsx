import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import App from '../components/App/index.jsx';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
