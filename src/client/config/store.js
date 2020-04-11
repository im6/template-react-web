/* eslint global-require:0, no-underscore-dangle: 0 */
import { fromJS } from "immutable";
import {
  createStore,
  applyMiddleware,
  compose as compose0,
  combineReducers,
} from "redux";

import moduleReducers from "../../reducers";

const middlewares = [];
let compose = compose0;

if (process.env.NODE_ENV === "development") {
  const logger = require("redux-logger").default;
  middlewares.push(logger);
  compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose0;
}

const enhancers = applyMiddleware(...middlewares);
const initState = window._REDUXSTATE_;
const store = createStore(
  combineReducers(moduleReducers),
  {
    auth: fromJS(initState.auth),
    todo: fromJS(initState.todo),
  },
  compose(enhancers)
);

export default store;
