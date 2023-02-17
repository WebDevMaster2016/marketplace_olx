import {useState} from "react";
import {useSelector} from "react-redux";

import Button from "@mui/material/Button";

import HeaderUserRedux from "../user";
import SignInModalRedux from "../../modal/signIn";

const HeaderLoggedUser = ({isLogged}) => {

	const ShowSignInModal = () => {
		const [isOpen, setIsOpen] = useState(false);
		return(
			<>
				<Button variant="text"
						color="white"
						onClick={() => setIsOpen(true)}
						sx={{
							my: 2,
							display: 'block',
							textTransform: 'initial',
							fontSize: '16px',
						}}
				>Log in</Button>
				{isOpen && <SignInModalRedux isOpen={true} handleClose={() => setIsOpen(false)}/>}
			</>
		)
	}

	return(
		isLogged ? <HeaderUserRedux/> : <ShowSignInModal/>
	)
}

const HeaderLoggedUserRedux = () => {
	const isLogged = useSelector(state => state?.auth?.token);
	return(
		<HeaderLoggedUser isLogged={isLogged}/>
	)
};

export default HeaderLoggedUserRedux;