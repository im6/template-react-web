import requester from './requester';

export async function getList() {
  return requester('/test');
}
