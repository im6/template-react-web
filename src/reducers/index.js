
const context = require.context('./', false, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');

const reducers = keys.reduce((memo, key) => {
  memo[key.match(/([^\/]+)\.js$/)[1]] = context(key);
  return memo;
}, {});

export default reducers;
