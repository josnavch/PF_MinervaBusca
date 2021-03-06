import React, { useContext, useState, useEffect } from "react";
//include js sweetAlert
import { Alerta, AlertaConfirmacion } from "./component/alerta";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import Nosotros from "./pages/nosotros";
import Contacto from "./pages/contacto";
import Catalogo from "./pages/catalogo";
import Mislibros from "./pages/mislibros";

import { NavBar } from "./component/navbar";
import { NavBarPublic } from "./component/nabvarPublic";
import { Footer } from "./component/footer";
import { Registro } from "./pages/registro";
import { RestablecerContrasena } from "./pages/restablecerContrasena";
import { NuevaContrasena } from "./component/fomularioNuevaConstrasena";
import { Login } from "./pages/login";
import { Casa } from "./pages/casa";
import { BookDetails } from "./pages/bookdetails";

//create your first component
const Layout = () => {
	const { store, actions } = useContext(Context);
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	let esLogueado = false; //validar si la session esta activa

	let istoken = localStorage.getItem("token");
	if (istoken) esLogueado = true;
	else esLogueado = false;

	console.log("Token Storage: ", istoken);
	console.log("Logeado: ", esLogueado);

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{esLogueado ? <NavBar /> : <NavBarPublic />}
					<Switch>
						<Route exact path="/">
							{esLogueado ? <Casa /> : <Home />}
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
						<Route exact path="/nosotros">
							<Nosotros />
						</Route>
						<Route exact path="/contacto">
							<Contacto />
						</Route>
						<Route exact path="/casa">
							<Casa />
						</Route>
						<Route exact path="/catalogo">
							<Catalogo />
						</Route>
						<Route exact path="/mislibros">
							<Mislibros />
						</Route>

						<Route path="/bookdetails/:id">
							<BookDetails />
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
