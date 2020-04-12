/* eslint no-useless-computed-key: 0, object-shorthand: 0 */
import { handleActions } from "redux-actions";
import Immutable from "immutable";

const todos = handleActions(
  {
    ["hello/do/nothing"](state) {
      return state;
    },
  },
  Immutable.fromJS({
    list: null,
    loading: false,
  })
);

export default todos;
