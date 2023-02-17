import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import actionFullAdComment from "../../actions/fullAdComment";

const AdAnswer = ({onComment, status}) => {
    const [comment, setComment] = useState('');

    useEffect(() => {
        if(status === 'FULFILLED') {
            setComment('');
        }
    }, [status])

    return(

            <div className="ad-view__box ad-view__answer-action ad-view__answer-action--root">
                <TextField className="ad-view__answer-field"
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

    )
}

const AdAnswerRedux = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.promise?.one?.status);
    const _id = useSelector(state => state.promise?.one?.payload?._id)

    return(
        <AdAnswer onComment={(comment) => dispatch(actionFullAdComment(comment, _id))}
                  status={status}
        />
    )
}

export default AdAnswerRedux;