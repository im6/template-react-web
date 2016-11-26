import requester from './requester';
import qs from 'qs';

export async function getList(obj) {
  return requester('/test', {
    method: "POST",
    body: JSON.stringify(obj)
  });
}

export async function getTodos(obj) {
  return requester('/test', {
    method: "POST",
    body: JSON.stringify(obj)
  });
}
