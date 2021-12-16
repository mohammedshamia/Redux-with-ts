import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { itemReducer, listReducer } from "./List/reducer";

const reducers = combineReducers({
  item: itemReducer,
  list: listReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

export type AppState = ReturnType<typeof reducers>;
