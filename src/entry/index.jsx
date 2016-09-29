import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Router,Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer} from 'react-router-redux';

import App from '../components/App/index.jsx'

import list from '../reducers/list';
import reducers from '../reducers';

const Routes = require('../routes/index');

var a = {
    list,
    routerReducer
};

const store = createStore(combineReducers(a));
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}></Route>
        </Router>
    </Provider>,
    document.getElementById("app"));