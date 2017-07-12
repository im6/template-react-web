'use strict';

const env = process.env;
const isDev = env.NODE_ENV === 'dev';

module.exports = {
  isDev,
  port: env.OPENSHIFT_NODEJS_PORT || 8080,
  ip: env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
};