import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const NavBar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<div className="container">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#buscar">Buscar y comprar</Nav.Link>
						<Nav.Link href="#mislibros">Mis libros</Nav.Link>
					</Nav>
				</Navbar.Collapse>

				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</Navbar>
	);
};
