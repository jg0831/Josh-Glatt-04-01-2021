import { combineReducers } from "redux";
import rootSlice from "./rootSlice";

export default combineReducers({
  root: rootSlice,
});
