import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { getUsers } from '../../services/resource.js';
import { createAction } from 'redux-actions';

function* watchers(a) {
  yield [
    takeLatest("users/get", fetchUsers)
  ]
}

function* fetchUsers(action) {
  try {
    const payload = yield call(getUsers, action.payload);
    let actCreater = createAction('users/get/success');
    yield put(actCreater(payload));
  } catch (e) {
    let actCreater = createAction('users/get/fail');
    yield put(actCreater({msg: e}));
  }
}

export default function*(){
  yield fork(watchers);
  let actCreater = createAction('users/get');
  yield put(actCreater({
    test:"get some users initially"
  }));
}
