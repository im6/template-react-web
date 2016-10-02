/* eslint-disable */
import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';

const requester = (url, options) => {
  const opts = { ...options };
  opts.headers = {
    ...opts.headers,
    authorization: cookie.get('authorization') || ''
  };
  return fetch(url, opts);

};