import Box from "@mui/material/Box";

import InfoRedux from "../../components/profile/about";
import UpdatePasswordRedux from "../../components/profile/password";

import '../../_assets/scss/_pages/profile.scss';

const PageProfile = () => {

	return(
		<Box className="profile"
			 sx={{my: 2}}
		>
			<h1>Profile</h1>
			<Box className="profile__group">
				<InfoRedux/>
				<UpdatePasswordRedux/>
			</Box>
		</Box>
	)
}

export default PageProfile;