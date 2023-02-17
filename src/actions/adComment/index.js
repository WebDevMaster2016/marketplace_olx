import gql from "../../components/utils/gql";
import actionPromise from "../promise";

const actionAdComment = (commentText, adID) => {
    return(
        actionPromise('comment', gql(`mutation upsertComment($commentText:String, $adID:ID) {
                                                CommentUpsert(comment: {text: $commentText, ad: {_id: $adID}}) {
                                                    _id
                                                }
                                            }`, {commentText, adID}))
    )
}

export default actionAdComment;