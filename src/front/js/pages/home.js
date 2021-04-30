import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Registro } from "../pages/registro";
import { HomeUsuario } from "../pages/homeUsuario";
import { Link } from "react-router-dom";
import homebooks from "../../img/homebooks.jpg";
import logo from "../../img/logo.png";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="my-3 container">
			<div className="row crema-f-bg">
				<div className="col-sm text-center">
					<div className="d-flex flex-column align-items-center h-100">
						<div className="m-auto">
							<p className="bronce fs-7 extrabold">Bienvenido a MinervaBusca.com</p>
							<p className="rosa fs-8 extrabold lh-1em">
								Tu librería <br />
								Virtual
							</p>
							<Link to="/login">
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
