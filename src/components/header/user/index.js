import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from '@mui/material/Divider';

import AvatarIconRedux from "../../common/avatar";

import actionAuthLogout from "../../../actions/auth/authLogout";

import "../../../_assets/scss/_pages/user.scss"

const HeaderUser = ({userName, userNick, onLogout}) => {
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState(null);

	return (
		<Box component={"div"}
		     sx={{my: 1}}
		     className="user-profile"
		>
			<Box className="user-profile__name"
			     component={"p"}
			>{userNick || userName}</Box>

			<Tooltip title="Account settings">
				<IconButton
					onClick={(event) => setAnchorEl(event.currentTarget)}
					aria-controls={Boolean(anchorEl) ? 'account-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
				>
					<AvatarIconRedux className="avatar avatar--header"/>
				</IconButton>
			</Tooltip>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={Boolean(anchorEl)}
				onClose={() => setAnchorEl(null)}
				onClick={() => setAnchorEl(null)}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<MenuItem>
					<Link to="/profile">Profile</Link>
				</MenuItem>
				<Divider />
				<MenuItem onClick={() => {
					onLogout();
					navigate("/");
				}}>Logout</MenuItem>
			</Menu>
		</Box>
	)
}

const HeaderUserRedux = () => {
	const userName = useSelector(state => state?.promise?.me?.payload?.login);
	const userNick = useSelector(state => state?.promise?.me?.payload?.nick);
	const dispatch = useDispatch();
	return(
		<HeaderUser userName={userName}
			   userNick={userNick}
			   onLogout={() => dispatch(actionAuthLogout())}
		/>
	)
}

export default HeaderUserRedux;