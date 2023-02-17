import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import actionFullComment from "../../actions/fullComment";

const CommentAnswer = ({onComment, status}) => {
    const [open, setOpen] = useState(false);
    const [comment, setComment] = useState('');

    useEffect(() => {
        if(status === 'FULFILLED') {
            setOpen(false);
        }
    }, [status])

    return(
        <>
            <Button variant="contained"
                    size="small"
                    className="ad-view__answer-button"
                    onClick={() => setOpen(!open)}
            >answer</Button>
            {open &&
                <div className="ad-view__answer-action">
                    <TextField className="ad-view__answer-field"
                               autoFocus={true}
                               margin="normal"
                               required
                               fullWidth
                               label="Answer text"
                               name="text"
                               autoComplete="text"
                               multiline
                               rows={4}
                               value={comment}
                               onChange={(e) => setComment(e.target.value)}
                    />
                    <Button variant="contained"
                            className="ad-view__comment-button"
                            onClick={() => onComment(comment)}
                    >Comment</Button>
                </div>
            }
        </>
    )
}

const CommentAnswerRedux = ({commentID}) => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.promise?.one?.status);
    const _id = useSelector(state => state.promise?.one?.payload?._id);

    return(
        <CommentAnswer onComment={(comment) => dispatch(actionFullComment(comment, _id, commentID))}
                       status={status}
        />
    )
}

export default CommentAnswerRedux;