import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import App from '../components/App/index.jsx';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} />
    <Route path="/list" component={App} />
  </Router>;

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;
