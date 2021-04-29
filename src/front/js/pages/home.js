import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";
import "../../styles/home.scss";
import { Registro } from "../pages/registro";
import { HomeUsuario } from "./homeUsuario";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-2 container">
			<div className="middle-info contenedor crema-f-bg">
				<img
					className="img"
					src="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-orange-web-solid-color-background.jpg"
				/>
				<div className="col-4 texto-encima">
					<h3>
						<strong>Bienvenido </strong> a &nbsp;&nbsp;&nbsp;MinervaBusca.com
					</h3>
				</div>
				<div className="col-2 centrado">
					<Link to="/registro">
						<button className="btn btnIngresarPrincipal btn-lg">Ingresar&#62;</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
