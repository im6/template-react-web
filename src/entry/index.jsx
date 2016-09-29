import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import list from '../reducers/list';
import reducers from '../reducers';
import App from '../components/App/index.jsx';

var a = {
    list
};
var b = reducers;
debugger;
const store = createStore(combineReducers(a));

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("app"));