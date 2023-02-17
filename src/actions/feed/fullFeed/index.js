import actionFeedAdd from "../add";
import actionList from "../../adList";
import actionCount from "../../adCount";

const actionFullFeed = (searchSting) =>
    async (dispatch, getState) => {
        const status = getState().promise.list?.status;
        if(status === "PENDING") return;
        const skipLength = getState().feed.length;
        const payload = await dispatch(actionList(searchSting, skipLength));
        dispatch(actionFeedAdd(payload));
        await dispatch(actionCount());
    }

export default actionFullFeed;