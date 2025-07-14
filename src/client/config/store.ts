import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";

import epics from "../epics/index";
import reducer from "../../reducers/index";

const epicMddleware = createEpicMiddleware();

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMddleware),
});

epicMddleware.run(epics);

export default store;
