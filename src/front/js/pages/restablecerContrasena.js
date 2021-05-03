import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/stylesRegistroHomeusuario.scss";

export const RestablecerContrasena = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");

	const EnviarCorreo = async () => {
		event.preventDefault();

		let result = await actions.sendRestoreEmail(email);
		alert(result);
	};

	return (
		<div className="container m-auto">
			<div className="row justify-content-center">
				<div className="tarjeta col-lg-6">
					<div className="xcard-text">
						<p className="titulo-formulario xcard-title xtext-center">
							&#191;Olvid&oacute; su contrase&ntilde;a?
						</p>
						<form>
							<div className="form-group text-center mt-2">
								<label htmlFor="exampleInputEmail1">
									Por favor ingresar su correo, le estaremos enviando un enlace para recuperar el
									acceso a su cuenta.
								</label>
							</div>
							<div className="form-group">
								<input
									type="email"
									className="form-control input text-center"
									placeholder="Correo Electrónico"
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="row justify-content-center">
								<button
									type="submit"
									className="btn boton-naranja xbtn-primary xbtn-block"
									onClick={event => EnviarCorreo(event)}>
									Enviar &#62;
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
