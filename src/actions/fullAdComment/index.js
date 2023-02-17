import actionAdComment from "../adComment";
import actionOne from "../adOne";

const actionFullAdComment = (commentText, _id) =>
    async dispatch => {
        await dispatch(actionAdComment(commentText, _id));
        await dispatch(actionOne(_id))
    }

export default actionFullAdComment;