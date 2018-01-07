import { combineReducers } from "redux";
import user from "./reducers/user";
import sets from "./reducers/sets";

export default combineReducers({
  user,
  sets
});
