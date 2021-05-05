import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import jwt from "jwt-decode"; // import dependency

import "../../styles/demo.scss";

export const NuevaContrasena = () => {
	const { store, actions } = useContext(Context);
	const [constraNueva, setConstraNueva] = useState("");
	const [constraVerifica, setConstraVerifica] = useState("");
	let param = useParams();
	const windowUrl = window.location.search;
	const token = windowUrl.slice(1);

	const CambiarContrasena = async () => {
		event.preventDefault();
		const user = jwt(token);
		console.log(user.sub);
		//validar que se cumpla el formato y ademas de que sean iguales
		let result = await actions.ChangePassword(user.sub, constraNueva);
		alert(result);
	};
	const ValidarConstrasena = () => {};

	return (
		<div className="container m-auto col-lg-4 col-md-6 col-sm-12">
			<div className="card login-form">
				<div className="card-body col-12 m-auto">
					<h3 className="card-title text-center">Restablecer su contrase&ntilde;a</h3>

					<div className="card-text">
						<form>
							<div className="alert alert-warning" role="alert">
								La contrase&ntilde;a debe contener al menos 6 caracteres.
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control form-control-sm font-weight-bolder"
									placeholder="Ingrese la nueva contraseña"
									onChange={e => setConstraNueva(e.target.value)}
									style={{ fontSize: "1.0rem" }}
								/>
							</div>
							<div className="form-group my-3">
								<input
									type="password"
									className="form-control form-control-sm font-weight-bolder"
									placeholder="Ingrese nuevamente la contraseña"
									onChange={e => setConstraVerifica(e.target.value)}
									style={{ fontSize: "1.0rem" }}
								/>
							</div>

							<button
								type="submit"
								className="btn btn-primary btn-block"
								onClick={event => CambiarContrasena(event)}>
								Establecer nueva contrase&ntilde;a
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export function EnviarCorreo() {
	event.preventDefault();
	alert("Enviar correo");
}

NuevaContrasena.propTypes = {};
