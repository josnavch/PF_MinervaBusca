import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/demo.scss";

export const NuevaContrasena = props => {
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
									style={{ fontSize: "1.0rem" }}
								/>
							</div>
							<div className="form-group my-3">
								<input
									type="password"
									className="form-control form-control-sm font-weight-bolder"
									placeholder="Ingrese nuevamente la contraseña"
									style={{ fontSize: "1.0rem" }}
								/>
							</div>

							<button
								type="submit"
								className="btn btn-primary btn-block"
								onClick={event => EnviarCorreo(event)}>
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
