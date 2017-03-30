import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../modules/app';
import Todos from '../modules/todos';
import Users from '../modules/users';
import ErrorPage from '../modules/errorPage';
import Hello from '../modules/hello';
import Loading from '../modules/loading';

import { getAuth } from '../services/resource';


const Routes = ({ history, store }) =>{
  const checkAuth = (nextState, replace, callback) => {
    if(store.getState().auth.get('isAuth')){
      callback();
    }else{
      getAuth({username:'Jim',password: 'Teddy'}).then((res) => {
        if(!res.data){
          replace('/error');
        } else {
          store.dispatch({
            type: "auth/login",
            payload: res.data
          });
        }
      }, (res) => {
        replace('/error');
        callback();
      });

      store.dispatch({
        type: "auth/saveUrl",
        payload: nextState.location.pathname
      });

      replace('/loading');
      callback();
    }
  };

  return <Router history={history} >
    <Route path="/loading"
           component={Loading}/>
    <Route path="/"
           onEnter={checkAuth}
           component={App}>
      <IndexRoute component={Hello}/>
      <Route path="todos" component={Todos}/>
      <Route path="users" component={Users} />
      <Route path="*" component={ErrorPage} />
    </Route>
  </Router>;
};

Routes.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default Routes;
