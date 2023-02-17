import gql from "../../../components/utils/gql";
import actionPromise from "../../promise";

const actionRegister = (login, password) =>
	actionPromise('register', gql(`mutation reg($login: String!, $password: String!) {
											  createUser(login: $login, password: $password) {
											    _id
											    login
											  }
											}`, {login, password}));

export default actionRegister;