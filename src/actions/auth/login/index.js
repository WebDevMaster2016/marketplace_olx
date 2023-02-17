import gql from "../../../components/utils/gql";
import actionPromise from "../../promise";

const actionLogin = (login, password) =>
	actionPromise('login', gql(`query log($login:String!, $password:String!) {
					  login(login:$login, password:$password)
					}`, {login, password}));

export default actionLogin;