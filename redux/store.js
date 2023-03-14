import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userDataReducer } from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const reducer = combineReducers({
  userData: userDataReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
