import { combineEpics } from "redux-observable";
import uiEpics from "./ui";
import demo1Epics from "./demo1";

const rootEpic = combineEpics(...demo1Epics, ...uiEpics);

export default rootEpic;
