import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Registro } from "../pages/registro";
import { HomeUsuario } from "../pages/homeUsuario";
import { Link } from "react-router-dom";
import homebooks from "../../img/homebooks.jpg";

export const Casa = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mb-3 mt-1 container">
			<div className="row">
				<div className="d-flex align-items-center col-sm p-0 crema-f-bg mt-2 mr-sm-0 mr-md-3">
					<div className="col-md-5">
						<Link to="/login">
							<p className="naranja fs-7 text-center extrabold p-0 m-0">Buscar</p>
						</Link>
					</div>
					<div className="col-md-7 p-0">
						<img src={homebooks} className="img-fluid" />
					</div>
				</div>

				{/* empieza card Mis Libros */}

				<div className="d-flex align-items-center col-sm p-0 mt-2 crema-f-bg">
					<div className="col-md-5">
						<Link to="/login">
							<p className="naranja fs-7 text-center extrabold p-0 m-0">Mis Libros</p>
						</Link>
					</div>
					<div className="col-md-7 p-0">
						<img src={homebooks} className="img-fluid" />
					</div>
				</div>
			</div>
		</div>
	);
};
