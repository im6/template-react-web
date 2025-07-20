import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { reduxName } from "../../constant";

import epics from "../epics/index";
import reducer from "../../reducers/index";
import { getDarkModeFromCookies } from "../../util/cookie";

const epicMddleware = createEpicMiddleware();
const ssrState = (window as { [key: string]: any })[reduxName] as any;

const initState = {
  ...ssrState,
  ui: {
    ...ssrState.ui,
    isDark: getDarkModeFromCookies(),
  },
};

const store = configureStore({
  // @ts-ignore
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initState,
  // @ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMddleware),
});

epicMddleware.run(epics);

export default store;
