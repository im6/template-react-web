import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../modules/app';
import ErrorPage from '../modules/errorPage';
import Hello from '../modules/hello';
import Loading from '../modules/loading';
import LogOn from '../modules/logon';
import Todos from '../modules/todos';
import resource from '../services/resource';

const Routes = ({ history, store }) => {
  const checkAuth = (nextState, replace, callback) => {
    if (store.getState().auth.get('isAuth')) {
      callback();
    } else {
      resource.getAuth({
        username: 'Jim',
        password: 'Teddy',
      }).then((res) => {
        if (!res.data) {
          replace('/error');
        } else {
          store.dispatch({
            type: 'auth/login',
            payload: res.data,
          });
        }
      }, () => {
        store.dispatch({
          type: 'auth/login/hot',
        });
        callback();
      });

      store.dispatch({
        type: 'auth/saveUrl',
        payload: nextState.location.pathname,
      });

      replace('/loading');
      callback();
    }
  };

  return (
    <Router history={history}>
      <Route path="/logon" component={LogOn} />
      <Route path="/loading" component={Loading} />
      <Route path="/" onEnter={checkAuth} component={App}>
        <IndexRoute component={Hello} />
        <Route path="todos" component={Todos} />
        <Route path="*" component={ErrorPage} />
      </Route>
    </Router>
  );
};

Routes.propTypes = {
  history: PropTypes.isRequired,
  store: PropTypes.isRequired,
};

export default Routes;
