import gql from "../../components/utils/gql";
import actionPromise from "../promise";

const actionUser = (_id, name = 'user') =>
	actionPromise(name, gql(`query userById($userId: String) {
									  UserFindOne(query: $userId) {
									    _id
									    nick
									    login
									    phones
									    addresses
									    avatar{
									      url
									    }
									  }
									}`, {userId: JSON.stringify([{_id}])}));

export default actionUser;