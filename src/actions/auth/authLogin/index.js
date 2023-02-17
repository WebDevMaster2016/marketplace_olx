import actionAboutMe from "../../aboutMe";

const actionAuthLogin = (token) =>
	(dispatch, getState) => {
		const oldState = getState();
		dispatch({type: 'AUTH_LOGIN', token});
		const newState = getState();
		if (oldState !== newState) {
			localStorage.setItem('authToken', token);
			dispatch(actionAboutMe());
		}
	}

export default actionAuthLogin;