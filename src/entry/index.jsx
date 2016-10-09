/* eslint global-require:0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux';
//import Routes from '../routes/index';
import list from '../reducers/list';
import mySaga from '../saga/list.js';

import App from '../components/App/index.jsx';
import List from '../components/List/index.jsx';


const appDom = document.getElementById('app');
const sagaMiddleware = createSagaMiddleware();

let allReducers = {
  list,
  routing,
};

const store = createStore(combineReducers(allReducers), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

const history = syncHistoryWithStore(browserHistory, store);

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}/>
        <Route path="/list" component={App}/>
      </Router>
    </Provider>,
    appDom
  );
};


if (module.hot) {
  const renderNormally = render;
  const renderException = (error) => {
    const RedBox = require('redbox-react').default;

    ReactDOM.render(<RedBox error={error} />, appDom);
  };
  render = () => {
    try {
      renderNormally();
    } catch (error) {
      renderException(error);
    }
  };
  module.hot.accept('../routes/index', () => {
    render();
  });
}

render();
