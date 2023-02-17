import {useState} from "react";
import {useDispatch} from "react-redux";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import actionUpdatePassword from "../../../actions/updatePassword";

const UpdatePassword = ({onSave}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    return(
        <div className="profile__password">
            <Box className="profile__fieldset">
                <TextField margin="normal"
                           required
                           fullWidth
                           id="new_login"
                           label="Login"
                           name="login"
                           autoComplete="text"
                           value={login}
                           onChange={(e) => setLogin(e.target.value)}
                />
                <TextField margin="normal"
                           required
                           fullWidth
                           id="password"
                           label="Password"
                           type="password"
                           name="password"
                           autoComplete="text"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                />
                <TextField margin="normal"
                           required
                           fullWidth
                           id="new_password"
                           label="New Password"
                           type="password"
                           name="new_password"
                           autoComplete="text"
                           value={newPassword}
                           onChange={(e) => setNewPassword(e.target.value)}
                />
            </Box>
            <Button variant="contained"
                    className="profile__action"
                    onClick={() => {onSave(login, password, newPassword)}}
            >Update Password</Button>
        </div>
    )
}

const UpdatePasswordRedux = () => {
    const dispatch = useDispatch();

    return(
        <UpdatePassword onSave={(login, password, newPassword) => dispatch(actionUpdatePassword(login, password, newPassword))}/>
    )
}

export default UpdatePasswordRedux;