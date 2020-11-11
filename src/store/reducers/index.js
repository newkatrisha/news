import newsReducer from "./newsReducer";
import usersReducer from "./usersReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  news: newsReducer,
  users: usersReducer,
});

export default rootReducer;
