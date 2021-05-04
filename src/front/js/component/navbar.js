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
					<div className="d-flex offset-xs-0 offset-lg-1">
						<div className="mr-auto p-2">
							<a className="" href="/">
								<img
									src={logo}
									width="75%"
									className="d-inline-block align-top logo"
									alt="MinervaBusca.com"
								/>
							</a>
						</div>
						<div className="my-personal-info my-auto mr-sm-2">
							<div className="d-flex flex-column">
								<div>
									<p>
										Bienvenido:
										<span className="bold"> {usuario.name}</span>
									</p>
								</div>
								<div>
									<Nav.Link className="menuLinks mr-3" href="#">
										Mis libros
									</Nav.Link>
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
								Inicio
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
