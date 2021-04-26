import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../styles/home.scss";
import logo from "../../img/logo.png";

export const NavBarPublic = () => {
	return (
		<>
			<div className="fila-Superio crema-bg">
				<div className="container-fluid">
					<div className="d-flex offset-md-1">
						<div className="mr-auto p-2 ml-5">
							<a className="" href="#">
								<img
									// src="https://cdn.iconscout.com/icon/premium/png-512-thumb/webpage-not-found-1-484846.png"
									src={logo}
									width="129px"
									// height="100"
									className="d-inline-block align-top"
									alt=""
								/>
							</a>
						</div>
						<div className="">
							<div className="d-flex flex-column">
								<div className="p-2">
									<Link to="/ingreso">
										<button className="btn btnIngresar">Ingresar</button>
									</Link>
								</div>
								<div className="p-2">
									<Link to="/registro">
										<a className="ahrefRegistrar">o Registrarse</a>
									</Link>
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
							<Nav.Link className="menuLinks mr-3" href="/">
								Inicio
							</Nav.Link>
							<Nav.Link className="menuLinks mr-3" href="/nosotros">
								Sobre Nosotros
							</Nav.Link>
							<Nav.Link className="menuLinks mr-3" href="/contacto">
								Contacto
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</>
	);
};
