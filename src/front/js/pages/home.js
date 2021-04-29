import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";
import "../../styles/home.scss";
import { Registro } from "../pages/registro";
import { HomeUsuario } from "./homeUsuario";
import { Link } from "react-router-dom";
import homebooks from "../../img/homebooks.jpg";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-2 container">
			<div className="row crema-f-bg">
				<div className="col-sm text-center">
					<div className="d-flex flex-column align-items-center h-100">
						<div className="m-auto">
							<p className="bronce fs-7 extrabold">Bienvenido a MinervaBusca.com</p>
							<p className="rosa fs-8 extrabold">
								Tu librería {"\n"}
								Virtual
							</p>
							<Link to="/registro">
								<button className="btn btnIngresarPrincipal btn-lg uva-bg bold btn-padding">
									Ingresar &#62;
								</button>
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
