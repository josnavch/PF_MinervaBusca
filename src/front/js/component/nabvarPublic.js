import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../styles/home.scss";

export const NavBarPublic = () => {
	return (
		<>
			<div className="fila-Superio" style={{ backgroundColor: "#fdf5eb" }}>
				<div className="container-fluid">
					<div className="d-flex offset-md-2">
						<div className="mr-auto p-2 ml-5">
							<a className="" href="#">
								<img
									src="https://cdn.iconscout.com/icon/premium/png-512-thumb/webpage-not-found-1-484846.png"
									width="100"
									height="100"
									className="d-inline-block align-top"
									alt=""
								/>
							</a>
						</div>
						<div className="">
							<div className="d-flex flex-column">
								<div className="p-2">
									<Link to="/login">
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
			<Navbar style={{ backgroundColor: "#4f195d" }} expand="lg">
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
