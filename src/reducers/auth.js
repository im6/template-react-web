/* eslint-disable */
import { handleActions } from 'redux-actions';
import Immutable, {Map, List} from 'immutable';

const auth = handleActions({
  ['auth/login'](state, action) {
    return state.merge({
      isAuth: true,
      url: null
    });
  },

  ['auth/saveUrl'](state, action) {
    return state.merge({
      url: action.payload
    });
  },

}, Map({
  isAuth: false,
  url: null
}));

export default auth;
