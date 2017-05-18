/* eslint no-useless-computed-key: 0, object-shorthand: 0 */
import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

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
}, Immutable.fromJS({
  list: [],
  loading: false,
}));

export default todos;
