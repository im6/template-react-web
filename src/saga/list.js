import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getList } from '../services/list';

function* fetchUser(action) {
  try {
    const user = yield call(getList);
    yield put({type: "list/get/success", user: user});
  } catch (e) {
    yield put({type: "list/get/fail", message: e});
  }
}

function* mySaga() {
  yield* takeLatest("list/get", fetchUser);
}

export default mySaga;