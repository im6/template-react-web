/* eslint no-useless-computed-key: 0, object-shorthand: 0 */
import { handleActions } from 'redux-actions';
import { Map as immap } from 'immutable';

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

}, immap({
  isAuth: false,
  url: null,
}));

export default auth;
