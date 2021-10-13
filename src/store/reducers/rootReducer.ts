import { combineReducers } from "redux";

// Reducers
import { searchReducer } from "./searchReducer";

const rootReducer = combineReducers({
  search: searchReducer,
});

export default rootReducer;
