import gql from "../../components/utils/gql";
import actionPromise from "../promise";

const actionAvatar = (userID, avatarID) =>
    actionPromise('avatar', gql(`mutation updateAvatar($userID:String, $avatarID:ID) {
                                        UserUpsert(user:{_id: $userID, avatar: {_id: $avatarID}}) {
                                            _id
                                        }
                                    }`, {userID, avatarID}));

export default actionAvatar;