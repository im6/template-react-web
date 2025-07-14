import { combineEpics } from "redux-observable";
import homeEpics from "./home";

const rootEpic = combineEpics(...homeEpics);

export default rootEpic;
