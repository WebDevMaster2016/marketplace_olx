import gql from "../../components/utils/gql";
import actionPromise from "../promise";

const actionList = (searchString = '', skip = 0) =>
    actionPromise('list', gql(`query list($query: String) {
					  AdFind(query:$query) {
					    price _id owner {
                          _id login nick avatar {
                            _id url
                          }
					    }
					    title description images {
					      _id url
					    }
					  }
					}`, {query: JSON.stringify([
                            {
                                $or: [{title: `/${searchString}/`}, {description: `/${searchString}/`}]
                            },
                            {
                                sort: [{_id: -1}],
                                limit: [5],
                                skip: [skip]
                            }
                        ])}
    ));

export default actionList;