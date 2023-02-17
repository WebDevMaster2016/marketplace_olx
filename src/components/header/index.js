import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import Logo from "../common/logo";

import HeaderLoggedUserRedux from "./loggedUser";

import "../../_assets/scss/_pages/header.scss"

const Header = ({isLogged}) => {
	const navigate = useNavigate();

	return (
		<AppBar className="app__header header"
				position="sticky"
		>
			<Container maxWidth="lg">
				<Toolbar className="app__header-toolbar"
						 disableGutters
				>
					<Box sx={{
						mr: 2,
						display: { xs: 'none', md: 'flex' },
					}}>
						<Logo/>
					</Box>
					<Box sx={{
						mr: 2,
						display: { xs: 'flex', md: 'none' },
					}}>
						<Logo/>
					</Box>
					{isLogged && <Button className="button button--white header__button"
										 onClick={() => navigate('/create-new-ad')}
										 variant="contained"
										 color="white"
					>Create New Ad</Button>}

					<Box sx={{ flexGrow: 0, ml: !isLogged ? 'auto' : 'initial' }}>
						<HeaderLoggedUserRedux />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

const HeaderRedux = () => {
	const isLogged = useSelector(state => state?.auth?.token);

	return (
		<Header isLogged={isLogged}/>
	)
}

export default HeaderRedux;