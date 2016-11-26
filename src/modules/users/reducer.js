/* eslint-disable */
import { handleActions } from 'redux-actions';

const users = handleActions({
  ['users/get'](state, action) {
    console.log('loading users...');
    return { ...state, loading: true };
  },
  ['users/get/success'](state, action) {
    console.log('loading users success!');
    return { ...state, loading: false };
  },
  ['users/get/fail'](state, action) {
    console.error('loading users fail!');
    return { ...state, loading: false };
  }
}, {
  list: [],
  loading: true,
});

export default users;
