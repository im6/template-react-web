/* eslint no-useless-computed-key: 0, object-shorthand: 0 */
import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

const auth = handleActions(
  {
    ['auth/do/nothing'](state) {
      return state;
    },
  },
  Immutable.fromJS({
    name: null,
  })
);

export default auth;
