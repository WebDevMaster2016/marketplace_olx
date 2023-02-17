import actionUpdateMe from "../updateMe";
import actionAboutMe from "../aboutMe";

const actionFullUpdateMe = (user) =>
    async (dispatch) => {
        await dispatch(actionUpdateMe(user));
        await dispatch(actionAboutMe());
    }

export default actionFullUpdateMe;