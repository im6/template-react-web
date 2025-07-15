import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { reduxName } from "../../constant";

import epics from "../epics/index";
import reducer from "../../reducers/index";

const epicMddleware = createEpicMiddleware();

const store = configureStore({
  // @ts-ignore
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  // @ts-ignore
  preloadedState: window[reduxName],
  // @ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMddleware),
});

epicMddleware.run(epics);

export default store;
