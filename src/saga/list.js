import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { getList, getTodos } from '../services/list';


function* fetchUser(action) {
  try {
    const payload = yield call(getList, {test: 123});
    yield put({type: "list/get/success", payload});
  } catch (e) {
    yield put({type: "list/get/fail", payload: {msg: e}});
  }
}

function* fetchTodos(action) {
  try {
    const payload = yield call(getTodos, {test: 123});
    yield put({type: "todos/get/success", payload});
  } catch (e) {
    yield put({type: "todos/get/fail", payload: {msg: e}});
  }
}


function* mySaga(a) {
  yield [
    takeLatest("list/get", fetchUser),
    takeLatest("todos/get", fetchTodos),
    takeLatest("users/get", fetchUser),
  ]
}

export default function*(){
  yield fork(mySaga);

  yield put({
    type: 'todos/get'
  });
}
