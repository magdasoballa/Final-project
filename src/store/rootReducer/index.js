import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "../reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  user: userReducer
});

const middleWares = applyMiddleware(thunk, logger);

export const store = createStore(rootReducer, middleWares);