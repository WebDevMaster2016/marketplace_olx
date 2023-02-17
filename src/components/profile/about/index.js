import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import UploadDialog from "../../uploadDialog";
import AvatarIconRedux from "../../common/avatar";

import actionFullUpdateMe from "../../../actions/fullUpdateMe";

const Info = ({onSave}) => {
    const [profile, setProfile] = useState({ _id: '', login: '', nick: ''});

    const ShowUploadDialog = () => {
        const [open, setOpen] = useState(false);
        return(
            <>
                <Button variant="contained"
                        onClick={() => setOpen(true)}
                >Upload Profile Image</Button>
                {open && <UploadDialog isOpen={true}
                                       handleClose={() => setOpen(false)}
                />}
            </>
        )
    }

    return(
        <div className="profile__info">
            <div className="avatar-action">
                <AvatarIconRedux className="avatar avatar--profile"/>
                <ShowUploadDialog/>
            </div>
            <Box className="profile__fieldset">
                <TextField margin="normal"
                           required
                           fullWidth
                           id="login"
                           label="Login"
                           name="login"
                           autoComplete="text"
                           value={profile.login}
                           onChange={(e) => setProfile({...profile, login: e.target.value})}
                />
                <TextField margin="normal"
                           required
                           fullWidth
                           id="nick"
                           label="Nick"
                           name="nick"
                           autoComplete="text"
                           value={profile.nick}
                           onChange={(e) => setProfile({...profile, nick: e.target.value})}
                />
            </Box>
            <Button variant="contained"
                    className="profile__action"
                    onClick={() => {onSave(profile)}}
            >Save Profile</Button>
        </div>
    )
}

const InfoRedux = () => {
    const myID = useSelector(state => state.auth?.payload?.sub?.id)
    const dispatch = useDispatch();

    return(
        <Info onSave={(profile) => dispatch(actionFullUpdateMe({...profile, _id: myID}))} />
    )
}

export default InfoRedux;