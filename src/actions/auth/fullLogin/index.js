import actionAuthLogin from "../authLogin";
import actionLogin from "../login";

const actionFullLogin = (login, password) =>
	async dispatch => {
		const token = await dispatch(actionLogin(login, password))
		if (token){
			dispatch(actionAuthLogin(token));
		}
	}

export default actionFullLogin;