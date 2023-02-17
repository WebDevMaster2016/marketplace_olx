import {useSelector} from "react-redux";

import Box from "@mui/material/Box";

import AdListRedux from "../../components/adList";
import Search from "../../components/search";
import Logo from "../../components/common/logo";

import "../../_assets/scss/_pages/home.scss";

const PageMain = ({list, amountStatus, amount, isLogged}) => {
	return(
		<Box sx={{my: 2}}>
			{
				isLogged ?
				<>
					<Search/>
					<AdListRedux list={list}
								 amountStatus={amountStatus}
								 amount={amount}
					/>
				</>
				:
				<section className="hero">
					<h1>Welcome to <Logo classMod="hero__logo" /> app</h1>
					<p>Please login to view the list of available ads</p>
				</section>
			}
		</Box>
	)
}

const PageMainRedux = () => {
	const list = useSelector(state => state?.feed);
	const amountStatus = useSelector(state => state.promise?.listCount?.status);
	const amount = useSelector(state => state.promise?.listCount?.payload);
	const isLogged = useSelector(state => state?.auth?.token);

	return(
		<PageMain list={list}
				  amountStatus={amountStatus}
				  amount={amount}
				  isLogged={isLogged}
		/>
	)
}

export default PageMainRedux;