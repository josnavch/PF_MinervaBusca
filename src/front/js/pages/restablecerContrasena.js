import React from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.scss";

export const RestablecerContrasena = () => {
	return (
		<div className="container m-auto col-4">
			<div className="card login-form">
				<div className="card-body">
					<h3 className="card-title text-center">&#191;Olvid&oacute; su contrase&ntilde;a?</h3>

					<div className="card-text">
						<form>
							<div className="form-group text-center m-auto col-10">
								<label htmlFor="exampleInputEmail1">
									Por favor ingresar su correo, le estaremos enviando un enlace para recuperar el
									acceso a su cuenta.
								</label>
							</div>
							<div className="form-group">
								<input
									type="email"
									className="form-control form-control-sm font-weight-bolder"
									placeholder="Ingrese su dirección de correo"
									style={{ fontSize: "1.0rem" }}
								/>
							</div>
							<button
								type="submit"
								className="btn btn-primary btn-block"
								onClick={event => EnviarCorreo(event)}>
								Enviar enlace
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export async function EnviarCorreo() {
	event.preventDefault();
	alert("Enviar correo");

	let result = await fetch(url, {
		method: "POST",
		body: "[]",
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(resp => resp.json())
		.then(data => {
			console.log(data);
		})
		.catch(function(error) {
			//manejo de errores
			console.log("error", error.message);
			console.log("Error");
		});
}

