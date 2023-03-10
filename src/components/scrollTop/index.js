import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";

const ScrollTop = ({children}) => {
	const trigger = useScrollTrigger();

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Fade in={trigger}>
			<Box onClick={handleClick}
			     role="presentation"
			     sx={{
					 position: "fixed",
				     bottom: 16,
				     right: 16
				 }}
			>{children}</Box>
		</Fade>
	);
}

const BackToTop = (props) => {
	return(
		<ScrollTop {...props}>
			<Fab size="small"
			     aria-label="scroll back to top"
			>
				<KeyboardArrowUpIcon />
			</Fab>
		</ScrollTop>
	)
}

export default BackToTop;