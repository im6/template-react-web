import requester from './requester';

export default async function getList() {
  return requester('/test');
}
