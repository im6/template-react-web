import { takeLatest, delay } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import { getTodos } from '../services/resource';

function* fetchTodos(action) {
  try {
    const payload = yield call(getTodos, action.payload);
    yield delay(200);
    let actCreater = createAction('todos/get/success');
    yield put(actCreater(payload));
  } catch (e) {
    let actCreater = createAction('todos/get/fail');
    yield put(actCreater({ msg:e }));
  }
}

function* watchers() {
  yield [
    takeLatest("todos/get", fetchTodos),
  ];
}

export default function*(){
  yield fork(watchers);
}
