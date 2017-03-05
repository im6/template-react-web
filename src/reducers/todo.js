/* eslint-disable */
import { handleActions } from 'redux-actions';
import Immutable, {Map, List} from 'immutable';

const todos = handleActions({
  ['todos/get'](state, action) {
    return state.merge({
      loading: true,
      todoList: []
    });
  },
  ['todos/get/success'](state, action) {
    return state.merge({
      loading: false,
      todoList: action.payload.data
    });
  },
  ['todos/get/fail'](state, action) {
    console.error('loading todos fail!');
    return state.merge({
      loading: false,
      todoList: []
    });
  }
}, Map({
  todoList: [],
  loading: false,
}));

export default todos;
