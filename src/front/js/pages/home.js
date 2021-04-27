import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";
import "../../styles/home.scss";
import { Registro } from "../pages/registro";
import { HomeUsuario } from "../pages/homeUsuario";
import { Link } from "react-router-dom";
import homebooks from "../../img/homebooks.jpg";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-2 container">
			<div className="row crema-f-bg">
				<div className="col-sm">
					<div className="d-flex flex-column align-items-center">
						<div className="">
							<p>Bienvenido a MinervaBusca.com</p>
						</div>
						<div className="">
							<p>Tu librería Virtual</p>
						</div>
						<div className="">
							<Link to="/registro">
								<button className="btn btnIngresarPrincipal btn-lg">Ingresar&#62;</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-sm p-0">
					<img src={homebooks} className="img-fluid" />
				</div>
			</div>
		</div>
	);
};
