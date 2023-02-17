import actionFullLogin from "../fullLogin";
import actionRegister from "../register";

const actionFullRegister = (login, password) =>
	async dispatch => {
		const user = await dispatch(actionRegister(login, password))
		if(user) {
			dispatch(actionFullLogin(login, password))
		}
	}

export default actionFullRegister;