import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducers/rootReducer";

const middlewares = [thunk];

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
