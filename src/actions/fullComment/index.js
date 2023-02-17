import actionComment from "../comment";
import actionOne from "../adOne";

const actionFullComment = (commentText, _id, commentID) =>
    async dispatch => {
        await dispatch(actionComment(commentText, _id, commentID));
        await dispatch(actionOne(_id))
    }

export default actionFullComment;