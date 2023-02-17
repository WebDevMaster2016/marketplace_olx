import {useState} from 'react';
import {useDispatch} from "react-redux";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';

import actionFullLogin from "../../../actions/auth/fullLogin";
import actionFullRegister from "../../../actions/auth/fullRegister";

import "../../../_assets/scss/_pages/signin.scss"

const SignInModal = ({onSignIn, onRegister, isOpen, handleClose}) => {
	const [loginSignIn, setLoginSignIn] = useState('');
	const [passwordSignIn, setPasswordSignIn] = useState('');
	const [loginRegister, setLoginRegister] = useState('');
	const [passwordRegister, setPasswordRegister] = useState('');

	return (
		<Modal className="modal"
			   open={isOpen}
			   onClose={handleClose}
			   aria-labelledby="modal-modal-title"
			   aria-describedby="modal-modal-description"
		>
			<Box className="modal__content">

				<TabsUnstyled defaultValue={0}>
					<TabsListUnstyled className="modal__tab-list">
						<TabUnstyled className="modal__tab-list-item">Sign in</TabUnstyled>
						<TabUnstyled className="modal__tab-list-item">Register</TabUnstyled>
					</TabsListUnstyled>
					<TabPanelUnstyled value={0}>
						<Box sx={{
							marginTop: 2,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
						>
							<Box component="div">
								<TextField margin="normal"
										   required
										   fullWidth
										   id="email"
										   label="Email Address"
										   name="email"
										   autoComplete="email"
										   value={loginSignIn}
										   onChange={(e) => setLoginSignIn(e.target.value)}
								/>
								<TextField margin="normal"
										   required
										   fullWidth
										   name="password"
										   label="Password"
										   type="password"
										   id="password"
										   autoComplete="current-password"
										   value={passwordSignIn}
										   onChange={(e) => setPasswordSignIn(e.target.value)}
								/>
								<Button type="submit"
										fullWidth
										variant="contained"
										sx={{ mt: 3 }}
										onClick={() => onSignIn(loginSignIn, passwordSignIn)}
								>Sign In</Button>
							</Box>
						</Box>
					</TabPanelUnstyled>
					<TabPanelUnstyled value={1}>
						<Box sx={{
							marginTop: 2,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
						>
							<Box component="div">
								<TextField margin="normal"
										   required
										   fullWidth
										   id="email"
										   label="Email Address"
										   name="email"
										   autoComplete="email"
										   value={loginRegister}
										   onChange={(e) => setLoginRegister(e.target.value)}
								/>
								<TextField margin="normal"
										   required
										   fullWidth
										   name="password"
										   label="Password"
										   type="password"
										   id="password"
										   autoComplete="current-password"
										   value={passwordRegister}
										   onChange={(e) => setPasswordRegister(e.target.value)}
								/>
								<Button type="submit"
										fullWidth
										variant="contained"
										sx={{ mt: 3 }}
										onClick={() => onRegister(loginRegister, passwordRegister)}
								>Register</Button>
							</Box>
						</Box>
					</TabPanelUnstyled>
				</TabsUnstyled>

			</Box>
		</Modal>
	);
}

const SignInModalRedux = ({isOpen, handleClose}) => {
	const dispatch = useDispatch();
	return(
		<SignInModal isOpen={isOpen}
					 handleClose={handleClose}
					 onSignIn={(loginSignIn, passwordSignIn) => dispatch(actionFullLogin(loginSignIn, passwordSignIn))}
		             onRegister={(loginRegister, passwordRegister) => dispatch(actionFullRegister(loginRegister, passwordRegister))}
		/>
	);
}

export default SignInModalRedux;