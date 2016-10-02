import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux';

import App from '../components/App/index.jsx';

import list from '../reducers/list';

const reducers = combineReducers({
  list,
  routing,
});
const store = createStore(reducers, applyMiddleware(thunk));

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/list" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
