import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/stylesRegistroHomeusuario.scss";

export const RestablecerContrasena = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");

	const EnviarCorreo = async () => {
		event.preventDefault();
		let result = {};
		//validar correo con expresiones regulares
		let pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
		if (!pattern.test(email)) {
			alert("Debe ingresar un correo valido");
			return false;
		} else if (email.length < 1) {
			alert("Debe ingresar un correo");
			return false;
		} else {
			result = await actions.sendRestoreEmail({ email: email, url: process.env.FRONTEND_URL });
		}
		setEmail("");
		alert(result.message);
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
									value={email}
									className="form-control input text-center"
									placeholder="Correo Electrónico"
									required="required"
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
