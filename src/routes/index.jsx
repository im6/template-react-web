import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import App from '../components/App/index.jsx';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} key="1" />
    <Route path="/list" component={App} key="2"/>
    <Route path="/table" component={App} key="3"/>
  </Router>;

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;
