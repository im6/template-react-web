/* eslint-disable */
import { handleActions } from 'redux-actions';

const list = handleActions({
  ['list/get'](state, action) {
    console.log('loading...');
    return { ...state, loading: true };
  },
  ['list/get/success'](state, action) {
    console.log('loading success!');
    return { ...state, loading: false };
  },
  ['list/get/fail'](state, action) {
    console.error('loading fail!');
    return { ...state, loading: false };
  }
}, {
  list: [],
  loading: true,
});

export default list;
