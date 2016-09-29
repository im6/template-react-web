import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer} from 'react-router-redux';
import reducers from '../reducers/index';

const Routes = require('../routes/index');

const store = createStore(combineReducers({
    ...reducers
    //routerReducer,
    //applyMiddleware(thunk)
}), {});


//const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById("app"));