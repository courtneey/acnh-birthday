import { createStore, applyMiddleware } from "redux";
import appReducer from "./redux";
import loggingMiddleware from "redux-logger";
import thunk from "redux-thunk";

export default createStore(
  appReducer,
  applyMiddleware(thunk, loggingMiddleware)
);
