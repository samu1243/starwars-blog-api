import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Webnav } from "./component/navbar";
import { Footer } from "./component/footer";
import Characters from "./views/characters.jsx";
import Planets from "./views/planets.jsx";
import Starships from "./views/starships.jsx";
import Details from "./views/details.jsx";
import DetailsC from "./views/detailsc.jsx";
import DetailsShip from "./views/detailsship.jsx";
import Favorites from "./views/favorites.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Webnav />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/characters">
							<Characters />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/starships">
							<Starships />
						</Route>
						<Route exact path="/planets/:id">
							<Details />
						</Route>
						<Route exact path="/characters/:id">
							<DetailsC />
						</Route>
						<Route exact path="/starships/:id">
							<DetailsShip/>
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
