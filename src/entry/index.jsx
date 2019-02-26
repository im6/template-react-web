/* eslint global-require:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux';
import sagaInitiator from '../config/saga';
import moduleReducers from '../config/reducer';
import Routes from '../routes/index.jsx';

const isDev = process.env.NODE_ENV === 'development';
const appDom = document.getElementById('app');
const sagaMiddleware = createSagaMiddleware();

const middlewareList = [
  sagaMiddleware,
];

if (isDev) {
  const reduxLogger = require('redux-logger'); // not really conditional loading

  const logger = reduxLogger.createLogger();
  middlewareList.push(logger);
}

const initialState = {};
const enhancer = compose(
  applyMiddleware(...middlewareList),
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(combineReducers({
  ...moduleReducers, routing,
}), initialState, enhancer);
sagaInitiator(sagaMiddleware);
const history = syncHistoryWithStore(browserHistory, store);

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Routes
        history={history}
        store={store}
      />
    </Provider>,
    appDom
  );
};

if (isDev && module.hot) {
  const RedBox = require('redbox-react').default;

  const renderNormally = render;
  render = () => {
    try {
      renderNormally();
    } catch (error) {
      ReactDOM.render(<RedBox error={error} />, appDom);
    }
  };
}
render();
