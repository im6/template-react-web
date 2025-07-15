import reducerDemo1 from "./demo1";
import reducerDemo2 from "./demo2";
import reducerHome from "./home";

export interface ReduxSchema {
  demo1: typeof reducerDemo1;
  demo2: typeof reducerDemo2;
  home: typeof reducerHome;
}
const reducers: ReduxSchema = {
  demo1: reducerDemo1,
  demo2: reducerDemo2,
  home: reducerHome,
};

export default reducers;
