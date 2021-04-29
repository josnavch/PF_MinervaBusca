import React, { Component, useState } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import Nosotros from "./pages/nosotros";

import { NavBar } from "./component/navbar";
import { NavBarPublic } from "./component/nabvarPublic";
import { Footer } from "./component/footer";
import { Registro } from "./pages/registro";
import { RestablecerContrasena } from "./pages/restablecerContrasena";
import { NuevaContrasena } from "./component/fomularioNuevaConstrasena";
import { Login } from "./pages/login";
import { homeUsuario } from "./pages/homeUsuario";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const esLogueado = false; //validar si la session esta activa

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{esLogueado ? <NavBar /> : <NavBarPublic />}
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/registro">
							<Registro />
						</Route>
						<Route exact path="/restablecer">
							<RestablecerContrasena />
						</Route>
						<Route exact path="/restablecer/:token">
							<NuevaContrasena />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/homeUsuario">
							<homeUsuario />
						</Route>
						<Route exact path="/nosotros">
							<Nosotros />
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
