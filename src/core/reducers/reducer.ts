import { combineReducers } from "redux";
import postRenderer from "./postReducer";

const rootReducer = combineReducers({
  posts: postRenderer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
