import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { getTodos } from '../../services/resource';
import { createAction } from 'redux-actions';

function* watchers(a) {
  yield [
    takeLatest("todos/get", fetchTodos)
  ]
}

function* fetchTodos(action) {
  try {
    const payload = yield call(getTodos, action.payload);
    let actCreater = createAction('todos/get/success');
    yield put(actCreater(payload));
  } catch (e) {
    let actCreater = createAction('todos/get/fail');
    yield put(actCreater({msg:e}));
  }
}

export default function*(){
  let actCreater = createAction('todos/get');
  yield fork(watchers);
  yield put(actCreater());
}
