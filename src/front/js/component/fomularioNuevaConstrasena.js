import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import jwt from "jwt-decode"; // import dependency
import "../../styles/stylesRegistroHomeusuario.scss";

export const NuevaContrasena = () => {
	const { store, actions } = useContext(Context);
	const [constraNueva, setConstraNueva] = useState("");
	const [constraVerifica, setConstraVerifica] = useState("");
	const [estadoValida, setEstadoValida] = useState(true);
	let param = useParams();
	const windowUrl = window.location.search;
	const token = windowUrl.slice(1);

	const CambiarContrasena = async () => {
		event.preventDefault();
		const user = jwt(token);

		if (constraNueva.length >= 6 && constraNueva.length <= 12 && constraNueva == constraVerifica && estadoValida) {
			//validar que se cumpla el formato y ademas de que sean iguales
			let result = await actions.ChangePassword(user.sub, constraNueva);
		} else {
			console.log(constraNueva.length + " " + constraNueva + " " + constraVerifica + " " + estadoValida);
			alert("Revisar las contrasenas, ya que no cumple.");
		}
	};
	const validarContraNueva = () => {
		console.log(constraNueva.length);
		if (constraNueva.length < 6 || constraNueva.length > 12) {
			alert("Revisar las contrasenas, ya que no cumple.");
			setEstadoValida(false);
		} else {
			setEstadoValida(true);
			console.log(constraNueva.length);
		}
	};
	const validarContraValidar = () => {
		if (constraVerifica.length < 6 || constraVerifica.length > 12) {
			alert("Revisar las contrasenas, ya que no cumple.");
			setEstadoValida(false);
		} else if (constraVerifica != constraNueva) {
			alert("La contrasena no coinciden");
			setEstadoValida(false);
		} else {
			setEstadoValida(true);
		}
	};
	const escribirNuevaContrasena = eve => {
		setConstraNueva(eve.target.value);
		setConstraVerifica("");
	};

	return (
		<div className="container m-auto">
			<div className="row justify-content-center">
				<div className="tarjeta col-lg-6">
					<div className="xcard-text">
						<h3 className="titulo-formulario xcard-title xtext-center">Restablecer su contrase&ntilde;a</h3>
						<form>
							<div className="form-group text-center mt-2">
								<label htmlFor="exampleInputEmail1">
									La contrase&ntilde;a debe contener entre 6 a 12 caracteres.
								</label>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control  input text-center"
									placeholder="Ingrese la nueva contraseña"
									onChange={e => escribirNuevaContrasena(e)}
									onBlur={() => validarContraNueva()}
									style={{ fontSize: "2.0rem!important" }}
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control input text-center"
									placeholder="Ingrese nuevamente la contraseña"
									onChange={e => setConstraVerifica(e.target.value)}
									onBlur={() => validarContraValidar()}
									style={{ fontSize: "2.0rem!important" }}
								/>
							</div>
							<div className="row justify-content-center">
								<button
									type="submit"
									className="btn boton-naranja xbtn-primary xbtn-block"
									onClick={event => CambiarContrasena(event)}>
									Establecer nueva contrase&ntilde;a
								</button>
							</div>
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
