import gql from "../../components/utils/gql";
import actionPromise from "../promise";

const actionOne = (_id) =>
    actionPromise('one', gql(`query one($query: String) {
					  AdFindOne(query:$query) {
					    price _id owner {
                          _id login nick avatar {
                            _id url
                          }
					    }
					    title description images {
					      _id url
					    }
					    comments {
                          _id owner {
                            _id login nick avatar {
                              _id url
                            }
                          }
                          createdAt
                          text
                          answerTo {
                            _id
                          }
					    }
					  }
					}`, {query: JSON.stringify([{_id}])}
    ).then(ad => {
        ad.comments && ad.comments.forEach((element, index, array) => {
            if(element.answerTo !== null) {
                const parent = array.find(innerElem => innerElem._id === element.answerTo._id);

                if(parent) {
                    if(parent.answers) {
                        parent.answers.push(element)
                    } else {
                        parent.answers = [element]
                    }
                }
            }
        })

        return Object.assign({}, ad, {comments: ad.comments})
    }));

export default actionOne;