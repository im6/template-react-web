/* eslint no-param-reassign: 0*/
const context = require.context('../reducers/', true, /\.js$/);
const keys = context.keys();

const moduleReducers = keys.reduce((res, v) => {
  const str0 = v.replace(/\.js$/, '');
  let str1 = str0.replace(/^.\//, '');
  if (str1.indexOf('/') > -1) {
    str1 = str1.replace(/\//, '_');
  }
  res[str1] = context(v).default;
  return res;
}, {});

export default moduleReducers;
