import { takeLatest, delay } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import requester from '../services/requester';

function* fetchTodos(action) {
  try {
    const payload = yield call(requester, 'POST', '/todos', action.payload);
    yield delay(200);
    const actCreater = createAction('todos/get/success');
    yield put(actCreater(payload));
  } catch (e) {
    const actCreater = createAction('todos/get/fail');
    yield put(actCreater({ msg: e }));
  }
}

function* watchers() {
  yield [
    takeLatest('todos/get', fetchTodos),
  ];
}

export default function* () {
  yield fork(watchers);
}
