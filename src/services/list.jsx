import requester from './requester';

export async function getList(obj) {
  return requester('/test', obj);
}
