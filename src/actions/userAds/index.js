import gql from "../../components/utils/gql";
import actionPromise from "../promise";

const actionUserAds = (_id) =>
    actionPromise("userAds", gql(`query userAdsById($userId: String) {
									  AdFind(query: $userId) {
									    price _id owner {
                                          _id login nick avatar {
                                            _id url
                                          }
                                        }
                                        title description images {
                                          _id url
                                        }
									  }
									}`, {userId: JSON.stringify([{___owner: _id}])}));

export default actionUserAds;