import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import App from '../containers/App';
import ErrorPage from '../containers/ErrorPage';


const Routes = ({ history }) =>
    <Router history={history}>
        <Route path="/" component={App} />
        <Route path="/home" component={App} />
        <Route path="*" component={ErrorPage}/>
    </Router>;

Routes.propTypes = {
    history: PropTypes.any,
};

export default Routes;