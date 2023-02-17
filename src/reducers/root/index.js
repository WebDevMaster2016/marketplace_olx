import {combineReducers} from "redux";
import authReducer from "../auth";
import promiseReducer from "../promise";
import feedReducer from "../feed";

const rootReducer = combineReducers({
	auth: authReducer,
	promise: promiseReducer,
	feed: feedReducer
});

export default rootReducer;