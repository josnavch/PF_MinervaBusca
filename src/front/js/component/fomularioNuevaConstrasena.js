import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/demo.scss";

export const NuevaContrasena = props => {
	return (
		<div className="container m-auto col-4">
			<div className="card login-form">
				<div className="card-body">
					<h3 className="card-title text-center">Restablecer su contrase&ntilde;a</h3>

					<div className="card-text">
						<form>
							<div className="col-7 m-auto">
								<div className="form-group text-center m-auto col-10">
									<label htmlFor="exampleInputEmail1">
										*** La contrase&ntilde;a debe contener al menos 6 caracteres.
									</label>
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
								<Link to="/">
									<button type="submit" className="btn btn-primary btn-block">
										Establecer nueva contrase&ntilde;a
									</button>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

NuevaContrasena.propTypes = {};
