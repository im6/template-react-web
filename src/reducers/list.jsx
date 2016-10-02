/* eslint-disable */
import { handleActions } from 'redux-actions';

const list = handleActions({
  ['list/get'](state) {
    return { ...state, loading: true };
  },
  ['list/add'](state) {
    return { ...state, loading: true };
  }
}, {
  list: [],
  loading: true,
});

export default list;
