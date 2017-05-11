/* eslint global-require:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux';

import { sagaInitiator } from '../config/saga';
import { moduleReducers } from '../config/reducer';
import Routes from '../routes/index.jsx';

const appDom = document.getElementById('app');
const sagaMiddleware = createSagaMiddleware();
let middleList = [sagaMiddleware];

const initialState = {};
const enhancer = compose(
  applyMiddleware.apply(null, middleList),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);


const store = createStore(combineReducers({
  ...moduleReducers, routing,
}), initialState, enhancer);

sagaInitiator(sagaMiddleware);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} store={store}/>
  </Provider>,
  appDom
);
