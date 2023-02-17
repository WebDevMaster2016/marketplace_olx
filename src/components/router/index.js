import {Routes, Route} from 'react-router-dom';
import App from "../../App";
import PageProfile from "../../pages/profile";
import PageNotFound from "../../pages/404";
import CreateAd from "../../pages/create";
import User from "../../pages/user";
import Ad from "../../pages/ad";
import PageMainRedux from "../../pages/main";

const RouterConfig = () => {
	return (
		<Routes>
			<Route path="/"
			       element={<App />}
			/>
			<Route index
			       element={<PageMainRedux />}
			/>
			<Route path="profile"
			       element={<PageProfile />}
			/>
			<Route path="create-new-ad"
				   element={<CreateAd />}
			/>
			<Route path="search/:searchStr"
				   element={<PageMainRedux />}
			/>
			<Route path="user/:userID"
				   element={<User />}
			/>
			<Route path="ad/:adID"
				   element={<Ad />}
			/>
			<Route path="edit/:adID"
				   element={<CreateAd loadOld={true} />}
			/>
			<Route path="*"
			       element={<PageNotFound />}
			/>
		</Routes>
	)
}

export default RouterConfig;