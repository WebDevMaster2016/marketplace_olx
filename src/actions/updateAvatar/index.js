import actionAvatar from "../avatar";
import actionAboutMe from "../aboutMe";

const actionUpdateAvatar = () =>
    async (dispatch, getState) => {
        const myId = getState().auth?.payload?.sub?.id;
        const fileId = getState().promise?.upload?.payload?._id;
        await dispatch(actionAvatar(myId, fileId));
        await dispatch(actionAboutMe());
    }

export default actionUpdateAvatar;