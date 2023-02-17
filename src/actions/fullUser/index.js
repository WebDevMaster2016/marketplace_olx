import actionUser from "../user";
import actionUserAds from "../userAds";
import actionUserAdsCount from "../userAdsCount";

const actionFullUser = (_id) =>
    async dispatch => {
        dispatch(actionUser(_id));
        dispatch(actionUserAds(_id));
        dispatch(actionUserAdsCount(_id));
    }

export default actionFullUser;