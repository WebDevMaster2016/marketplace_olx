import actionPromise from "../promise";
import gql from "../../components/utils/gql";

const actionUpdateMe = (user) =>
    actionPromise('profile', gql(`mutation upsertProfile($user:UserInput) {
                                        UserUpsert(user:$user) {
                                            _id login nick
                                        }
                                    }`, {user}))

export default actionUpdateMe;