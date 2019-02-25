import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import { notification } from 'antd';
import requester from '../services/requester';

function* getHelloRes() {
  try {
    const payload = yield call(requester, 'GET', '/hello');
    delay(1);
    notification.success({
      message: 'Server response: ',
      description: payload.data,
    });
    const actCreater = createAction('hello/get/success');
    yield put(actCreater(payload));
  } catch (e) {
    const actCreater = createAction('hello/get/fail');
    notification.error({
      message: 'Server response fail: ',
      description: 'no server response',
    });
    yield put(actCreater({ msg: e }));
  }
}

function* watchers() {
  yield takeLatest('hello/get', getHelloRes);
}
export default watchers;
