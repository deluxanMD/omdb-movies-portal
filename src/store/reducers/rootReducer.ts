import { combineReducers } from "redux";

// Reducers
import { searchReducer } from "./searchReducer";
import { detailReducer } from "./detailReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  detail: detailReducer,
});

export default rootReducer;
