/* eslint-disable */
import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';


function jsonParse(res) {
  return res.json().then(jsonResult => ({ ...res, jsonResult }));
}


const requester = (url, options) => {
  const opts = { ...options };
  opts.headers = {
    ...opts.headers,
    authorization: cookie.get('authorization') || ''
  };
  return fetch(url, opts)
    .then(jsonParse);

};

export default requester;