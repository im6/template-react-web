/* eslint global-require:0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux';
//import Routes from '../routes/index.jsx';

import todos from '../modules/todos/reducer.js';
import users from '../modules/users/reducer.js';

import list from '../reducers/list.jsx';
import mySaga from '../modules/todos/saga.js';
import mySaga2 from '../modules/users/saga.js';

import App from '../modules/app/index.jsx';

const appDom = document.getElementById('app');
const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

let allReducers = {
  todos,
  users,
  list,
};

const store = createStore(combineReducers({
  ...allReducers, routing,
}), initialState, enhancer);

sagaMiddleware.run(mySaga);
sagaMiddleware.run(mySaga2);

const history = syncHistoryWithStore(browserHistory, store);

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} >
        <Route path="/" component={App}/>
        <Route path="/todos" component={App}/>
        <Route path="/users" component={App} />
        <Route path="*" component={App} />
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
