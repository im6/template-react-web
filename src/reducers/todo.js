/* eslint no-useless-computed-key: 0, object-shorthand: 0 */
import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

const todos = handleActions(
  {
    ['todo/add'](state, { payload }) {
      const newId = state.getIn(['list', state.get('list').size - 1, 'id']);
      const newState = state.updateIn(['list'], (v) => {
        return v.push({ id: newId + 1, name: payload });
      });
      return newState;
    },
  },
  Immutable.fromJS({
    list: null,
    loading: false,
  })
);

export default todos;
