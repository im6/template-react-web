import requester from './requester';
import qs from 'qs';

export async function getHello() {
  return requester('/hello', {
    method: "GET"
  });
}

export async function getTodos(obj) {
  return requester('/todos', {
    method: "POST",
    body: JSON.stringify(obj)
  });
}

export async function getUsers(obj) {
  return requester('/users', {
    method: "POST",
    body: JSON.stringify(obj)
  });
}

export async function getAuth(obj) {
  return requester('/auth', {
    method: "POST",
    body: JSON.stringify(obj)
  });
}