import React from "react";
import "../../styles/stylesRegistroHomeusuario.scss";

export const Registro = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-4 col-sm-2" />
				<div className="col-lg-4 col-sm-8">
					<div className="card m-3 p-3 formCard">
						<h4 className="mb-3 text-center">FORMULARIO DE REGISTRO</h4>
						<div className="row">
							<div className="col-12">
								<form>
									<div className="form-group">
										<input
											type="email"
											className="form-control input"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
											placeholder="Correo electrónico"
										/>
									</div>

									<div className="form-group">
										<input
											type="password"
											className="form-control input"
											id="exampleInputPassword1"
											placeholder="Contraseña"
										/>
									</div>
									<div className="form-group">
										<input
											type="password"
											className="form-control input"
											id="exampleInputPassword1"
											placeholder="Ingrese nuevamente su contraseña"
										/>
									</div>
									<div className="form-group">
										<input
											type="email"
											className="form-control input"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
											placeholder="Nombre completo"
										/>
									</div>
									<div className="form-group">
										<input
											type="email"
											className="form-control input"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
											placeholder="Cédula"
										/>
									</div>
									<div className="form-group">
										<input
											type="email"
											className="form-control input"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
											placeholder="Teléfono"
										/>
									</div>
									<div className="centrar">
										<button type="submit" className="btn btn-primary btn-lg center mb-4 mt-3 input">
											Crear cuenta
										</button>
									</div>
								</form>
								<p className="text-center">
									¿Ya tienes una cuenta?{" "}
									<a href="#" className="a">
										Ingresa aquí
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-2" />
			</div>
		</div>
	);
};
