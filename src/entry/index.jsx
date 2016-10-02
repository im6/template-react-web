/* eslint global-require:0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux';
import Routes from '../routes/index';
import list from '../reducers/list';

const appDom = document.getElementById('app');

const reducers = combineReducers({
  list,
  routing,
});
const store = createStore(reducers, applyMiddleware(thunk));

const history = syncHistoryWithStore(browserHistory, store);

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Routes history={history} />
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
