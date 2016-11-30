
const context = require.context('../modules/', true, /saga\.js$/);
let keys = context.keys();


const sagaManager = (sagaMiddleware) => {
  keys.forEach(v =>{
    sagaMiddleware.run(context(v).default);
  });
};


export default sagaManager;