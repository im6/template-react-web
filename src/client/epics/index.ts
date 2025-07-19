import { combineEpics } from "redux-observable";
import demo1Epics from "./demo1";

const rootEpic = combineEpics(...demo1Epics);

export default rootEpic;
