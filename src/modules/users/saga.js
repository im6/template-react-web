import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { getUsers } from '../../services/list.jsx';

function* fetchUsers(action) {
  try {
    const payload = yield call(getUsers, action.payload);
    yield put({type: "users/get/success", payload});
  } catch (e) {
    yield put({type: "users/get/fail", payload: {msg: e}});
  }
}


function* mySaga(a) {
  yield [
    takeLatest("users/get", fetchUsers)
  ]
}

export default function*(){
  yield fork(mySaga);
  yield put({
    type:'users/get',
    payload:{
      test:"get some users initially"
    }
  });
}
