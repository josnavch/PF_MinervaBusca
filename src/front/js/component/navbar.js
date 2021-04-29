import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../styles/home.scss";
import logo from "../../img/logo.png";

export const NavBar = () => {
	function logout() {
		localStorage.clear();
		window.location.replace(process.env.FRONTEND_URL + "/");
	}
	let usuario = JSON.parse(localStorage.getItem("user"));

	return (
		<div>
			<div className="fila-Superio crema-bg">
				<div className="container-fluid">
					<div className="d-flex offset-md-1">
						<div className="mr-auto p-2 ml-5">
							<a className="" href="/">
								<img
									src={logo}
									width="75%"
									// height="100"
									className="d-inline-block align-top"
									alt="MinervaBusca.com"
								/>
							</a>
						</div>
						<div className="my-personal-info mr-sm-2">
							<div className="d-flex flex-column">
								<div>
									<p>Bienvenido:</p>
								</div>
								<div>
									<p className="fa fa-user menuLinks mr-3"> {usuario.name}</p>
								</div>
								<div>
									<Nav.Link className="menuLinks mr-3" href="#" onClick={() => logout()}>
										Salir
									</Nav.Link>
								</div>
							</div>
						</div>
						<div className="offset-md-1" />
					</div>
				</div>
			</div>
			<Navbar className="uva-bg" expand="lg">
				<div className="container">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link className="menuLinks mr-3" href="#">
								Home
							</Nav.Link>
							<Nav.Link className="menuLinks mr-3" href="#">
								Buscar y comprar
							</Nav.Link>
							<Nav.Link className="menuLinks mr-3" href="#">
								Mis libros
							</Nav.Link>
							<Nav.Link className="menuLinks mr-3" href="#" onClick={() => logout()}>
								Salir
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</div>
	);
};
