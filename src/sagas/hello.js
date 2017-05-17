import { takeLatest, delay } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import { notification } from 'antd';
import { getHello } from '../services/resource';

function* getHelloRes(action) {
  try {
    const payload = yield call(getHello, action.payload);
    notification.success({
      message: 'Server response: ',
      description: payload.data,
    });
    let actCreater = createAction('hello/get/success');
    yield put(actCreater(payload));
  } catch (e) {
    let actCreater = createAction('hello/get/fail');
    notification.error({
      message: 'Server response fail: ',
      description: 'no server response',
    });
    yield put(actCreater({ msg:e }));
  }
}

function* watchers() {
  yield [
    takeLatest("hello/get", getHelloRes),
  ]
}

export default function*() {
  yield fork(watchers);
}
