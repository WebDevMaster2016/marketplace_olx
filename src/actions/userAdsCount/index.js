import gql from "../../components/utils/gql";
import actionPromise from "../promise";

const actionUserAdsCount = (_id) =>
    actionPromise("userAdsCount", gql(`query userAdsCountById($userId: String) {
									  AdCount(query: $userId)
									}`, {userId: JSON.stringify([{___owner: _id}])}));

export default actionUserAdsCount;