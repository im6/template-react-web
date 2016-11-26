/* eslint-disable */
import { handleActions } from 'redux-actions';

const todos = handleActions({
  ['todos/get'](state, action) {
    console.log('loading todos...');
    return { ...state, loading: true };
  },
  ['todos/get/success'](state, action) {
    console.log('loading todos success!');
    return { ...state, loading: false };
  },
  ['todos/get/fail'](state, action) {
    console.error('loading todos fail!');
    return { ...state, loading: false };
  }
}, {
  list: [],
  loading: true,
});

export default todos;
