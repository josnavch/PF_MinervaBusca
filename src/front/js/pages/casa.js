import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Registro } from "../pages/registro";
import { HomeUsuario } from "../pages/homeUsuario";
import { Link } from "react-router-dom";
import homebooks3 from "../../img/homebooks3.jpg";
import homebooks2 from "../../img/homebooks2.jpg";
import lupa from "../../img/lupa.png";
import libro from "../../img/libro.png";

export const Casa = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="m-auto container">
			<div className="row mb-2">
				<div className="d-flex align-items-center col-sm p-0 gris-bg mt-2 mr-sm-0 mr-md-3">
					<div className="col-md-5">
						<Link to="/catalogo">
							<p className="naranja fs-7 text-center extrabold p-0 m-0">
								<img src={lupa} className="img-fluid" />
							</p>
							<p className="naranja fs-7 text-center extrabold p-0 m-0">Buscar</p>
						</Link>
					</div>
					<div className="col-md-7 p-0">
						<img src={homebooks3} className="img-fluid" />
					</div>
				</div>

				{/* empieza Mis Libros */}

				<div className="d-flex align-items-center col-sm p-0 mt-2 gris-bg">
					<div className="col-md-5">
						<Link to="/casa">
							<p className="naranja fs-7 text-center extrabold p-0 m-0">
								<img src={libro} className="img-fluid" />
							</p>
							<p className="naranja fs-7 text-center extrabold p-0 m-0">Mis Libros</p>
						</Link>
					</div>
					<div className="col-md-7 p-0">
						<img src={homebooks2} className="img-fluid" />
					</div>
				</div>
			</div>
		</div>
	);
};
