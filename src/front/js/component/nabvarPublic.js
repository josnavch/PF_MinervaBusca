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
					<div className="d-flex offset-lg-1">
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
						<div className="my-auto">
							<div className="d-flex flex-column">
								<div className="p-0">
									<Link to="/login">
										<button className="btn btnIngresar">Ingresar</button>
									</Link>
								</div>
								<div className="p-0">
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
