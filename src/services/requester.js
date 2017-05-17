import fetch from 'isomorphic-fetch';
import { notification } from 'antd';
import merge from 'merge';

const DEFAULTCONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'same-origin',
};

function jsonParse(res) {
  return res.json();
}

function errorHandle(res) {
  if ('status_code' in res && 'result' in res && res.result.error) {
    const message = `${res.result.errorMessage}. ${res.result.description}`;
    notification.error({
      message,
    });
  }
  return res;
}

const requester = (method, url, body) => {
  const opts = merge.recursive(true, DEFAULTCONFIG, {
    method,
    body: JSON.stringify(body),
  });

  return fetch(url, opts).then(jsonParse).then(errorHandle);
};

export default requester;
