import gql from "../../components/utils/gql";
import actionPromise from "../promise";

const actionComment = (commentText, adID, commentID) => {
    return(
        actionPromise('comment', gql(`mutation upsertComment($commentText:String, $adID:ID, $commentID:ID) {
                                                CommentUpsert(comment: {text: $commentText, ad: {_id: $adID}, answerTo: {_id: $commentID}}) {
                                                    _id
                                                }
                                            }`, {commentText, adID, commentID}))
    )
}

export default actionComment;