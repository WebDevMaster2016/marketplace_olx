import actionUser from "../user";
import actionUserAds from "../userAds";

const actionAboutMe = () =>
	async (dispatch, getState) => {
		const myId = getState().auth?.payload?.sub?.id;
		await dispatch(actionUser(myId, 'me'));
		dispatch(actionUserAds(myId))
	}

export default actionAboutMe;