import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers/root';
import actionAuthLogin from "./actions/auth/authLogin";

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunkMiddleware)
	)
);

store.dispatch(actionAuthLogin(localStorage.authToken))

export default store;