import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { getTodos } from '../../services/list.jsx';

function* fetchTodos(action) {
  try {
    const payload = yield call(getTodos, action.payload);
    yield put({type: "todos/get/success", payload});
  } catch (e) {
    yield put({type: "todos/get/fail", payload: {msg: e}});
  }
}


function* mySaga(a) {
  yield [
    takeLatest("todos/get", fetchTodos)
  ]
}

export default function*(){
  yield fork(mySaga);
  yield put({
    type:'todos/get',
    payload:{
      test:"get some todos initially"
    }
  });
}
