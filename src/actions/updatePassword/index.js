import actionPromise from "../promise";
import anonGql from "../../components/utils/anonGql";

const actionUpdatePassword = (login, password, newPassword) =>
    actionPromise('password', anonGql(`mutation upsertPassword($login: String!, $password: String!, $newPassword: String!) {
                                        changePassword(login: $login, password: $password, newPassword: $newPassword) {
                                            _id
                                            login
                                        }
                                    }`, {login, password, newPassword}))

export default actionUpdatePassword;