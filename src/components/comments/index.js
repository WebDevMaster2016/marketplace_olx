import {Link} from "react-router-dom";

import Avatar from "../common/avatarFeed";
import addZero from "../common/addZero";

import CommentAnswerRedux from "../commentAnswer";

const buildDate = date => `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;

const Comments = ({comments}) => {

    return(
        comments.map(element => {
            return (
                <div className="ad-view__comment"
                     key={element[1]._id}
                >
                    <div className="ad-view__comment-outer">
                        <div className="ad-view__comment-ava">
                            <Avatar src={element[1].owner?.avatar?.url}
                                    alt={element[1].owner?.nick}
                            />
                        </div>
                        <Link className="ad-view__comment-profile-link"
                              to={'/user/' + element[1].owner?._id}
                        >{element[1].owner?.nick || element[1].owner?.login}</Link>
                        <time className="ad-view__comment-time"
                              dateTime={buildDate(new Date(+element[1].createdAt))}
                        >{buildDate(new Date(+element[1].createdAt))}</time>
                        <p className="ad-view__comment-text">{element[1].text}</p>
                        <CommentAnswerRedux commentID={element[1]._id}/>
                    </div>
                    {element[1].answers && <div className="ad-view__comment-inner">
                        <Comments comments={Object.entries(element[1].answers)}/>
                    </div>}
                </div>
            )
        })
    )
}

export default Comments;