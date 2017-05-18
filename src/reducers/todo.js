/* eslint no-useless-computed-key: 0, object-shorthand: 0 */
import { handleActions } from 'redux-actions';
import { Map as immap } from 'immutable';

const todos = handleActions({
  ['todos/get'](state) {
    return state.merge({
      loading: true,
      list: [],
    });
  },
  ['todos/get/success'](state, action) {
    return state.merge({
      loading: false,
      list: action.payload.data,
    });
  },
  ['todos/get/fail'](state) {
    return state.merge({
      loading: false,
      list: [],
    });
  },
}, immap({
  list: [],
  loading: false,
}));

export default todos;
