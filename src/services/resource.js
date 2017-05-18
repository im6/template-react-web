import requester from './requester';

const resource = {
  getAuth(obj) {
    return requester('POST', '/auth', obj);
  },
};

export default resource;
