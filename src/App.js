import {BrowserRouter, Outlet} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store";

import Container from '@mui/material/Container';
import Box from "@mui/material/Box";

import Router from "./components/router";
import HeaderRedux from "./components/header";
import ScrollTop from "./components/scrollTop";
import Footer from "./components/footer";

import './_assets/scss/_pages/layout.scss'

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="app">
					<Box className="app__wrapper">
						<HeaderRedux/>
						<Container component="main"
						           maxWidth="lg"
						>
							<Router/>
							<Outlet/>
						</Container>
						<Box component="footer"
						     className="app__footer"
						>
							<Container maxWidth="lg">
								<Footer/>
							</Container>
						</Box>
						<ScrollTop/>
					</Box>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;