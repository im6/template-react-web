import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import { getUsers } from '../services/resource.js';

function* fetchUsers(action) {
  try {
    const payload = yield call(getUsers, action.payload);
    const actCreater = createAction('users/get/success');
    yield put(actCreater(payload));
  } catch (e) {
    const actCreater = createAction('users/get/fail');
    yield put(actCreater({ msg: e }));
  }
}

function* watchers() {
  yield [
    takeLatest('users/get', fetchUsers),
  ];
}

export default function* () {
  yield fork(watchers);
  const actCreater = createAction('users/get');
  yield put(actCreater({
    test: 'get some users initially',
  }));
}
