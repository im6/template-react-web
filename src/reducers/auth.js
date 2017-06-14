/* eslint no-useless-computed-key: 0, object-shorthand: 0 */
import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

const auth = handleActions({
  ['auth/login'](state) {
    return state.merge({
      isAuth: true,
      url: null,
    });
  },
  ['auth/login/hot'](state) {
    return state.merge({
      isAuth: true,
      url: null,
    });
  },

  ['auth/saveUrl'](state, action) {
    return state.merge({
      url: action.payload,
    });
  },

}, Immutable.fromJS({
  isAuth: false,
  url: null,
  users: [
    {
      username: 'John',
    },
    {
      username: 'Timothy',
    },
    {
      username: 'Evan',
    },
  ],
}));

export default auth;
