const context = require.context('../reducers/', true, /\.js$/);
const keys = context.keys();

export const moduleReducers = keys.reduce(function(res, v) {
  let str0 = v.replace(/\.js$/,'');
  let str1 = str0.replace(/^.\//,'');
  if(str1.indexOf('/') > -1){
    str1 = str1.replace(/\//, '_');
  }
  res[str1] = context(v).default;
  return res;
},{});

