import gql from "../../components/utils/gql";
import actionPromise from "../promise";

const actionCount = () =>
    actionPromise('listCount', gql(`query listCount($query: String) {
					  AdCount(query:$query)
					}`, {query: JSON.stringify([{}, {}])}
    ));

export default actionCount;