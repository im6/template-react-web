import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux';
import reducers from '../reducers/index';

const Routes = require('../routes/index');

const store = createStore(
    ...reducers,
    routing,
    applyMiddleware(thunk)
);

const App = () => (
    <Provider store={store}>
        <Routes history={history} />
    </Provider>
);

render(<App/>, document.getElementById("app"));