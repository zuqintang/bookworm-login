import { combineReducers } from "redux";
import user from "./reducers/user";
import sets from "./reducers/sets";
import elements from "./reducers/elements";

export default combineReducers({
  user,
  sets,
  elements
});
