import reducerUi from "./ui";
import reducerDemo1 from "./demo1";
import reducerDemo2 from "./demo2";

export interface ReduxSchema {
  ui: typeof reducerUi;
  demo1: typeof reducerDemo1;
  demo2: typeof reducerDemo2;
}

const reducers: ReduxSchema = {
  ui: reducerUi,
  demo1: reducerDemo1,
  demo2: reducerDemo2,
};

export default reducers;
