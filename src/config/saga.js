const context = require.context('../sagas/', true, /\.js$/);
const keys = context.keys();
const sagaInitiator = (sagaMiddleware) => {
  keys.forEach((v) => {
    sagaMiddleware.run(context(v).default);
  });
};

export default sagaInitiator;
