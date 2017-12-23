import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import CounterReducer from "./Reducers/counterReducer";
import thunk from "redux-thunk";
const Store = createStore(combineReducers({ CounterReducer }), compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));
export default Store;