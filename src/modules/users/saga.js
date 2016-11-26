import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getList } from '../services/list';

function* fetchUser(action) {
  try {
    const payload = yield call(getList, {test: 123});
    yield put({type: "todos/get/success", payload});
  } catch (e) {
    yield put({type: "todos/get/fail", payload: {msg: e}});
  }
}

function* mySaga() {
  yield* takeLatest("todos/get", fetchUser);
}

export default mySaga;
