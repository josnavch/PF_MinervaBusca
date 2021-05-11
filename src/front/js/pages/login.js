import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import iconImageUrl from "../../img/rigo-baby.jpg";
import { Redirect, Route } from "react-router";
import { Link } from "react-router-dom";
import { Alerta, AlertaConfirmacion } from "../component/alerta";
import "../../styles/login.scss";
import "../../styles/home.scss";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />;

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handlerClick = e => {
		e.preventDefault();

		actions.setLogin({
			email: email,
			password: password
		});

		if (store.user.token == null || store.user.token !== "") {
			Alerta("", store.user.msg, "error");
		}
	};

	function handlerLogout() {
		actions.setLogout({
			email: email
		});
	}

	useEffect(() => {
		actions.getToken();
	}, []);

	return (
		<div className="container m-auto text-center">
			{console.log(store.user.token)}

			<div className="row justify-content-center xborder">
				<div className="col-lg-6">
					<form className="tarjeta">
						<p className="titulo-formulario xtitulo">Ingresar</p>
						<div className="row xMB-3">
							<div className="col border input-group icon-input-group flex-nowrap xinput-container">
								<span className="input-group-text">
									<i className="fa fa-user faa-lg icon" />
								</span>
								<input
									type="email"
									className="icon-form-control input input-field"
									value={email}
									placeholder="Correo Electrónico / Usuario"
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
						</div>
						<div className="row xMB-3">
							<div className="col border input-group icon-input-group flex-nowrap xinput-container">
								<span className="input-group-text">
									<i className="fa fa-key fa-lg icon" />
								</span>
								<input
									value={password}
									onChange={e => setPassword(e.target.value)}
									type="password"
									className="icon-form-control input input-field"
									placeholder="Contraseña"
								/>
							</div>
						</div>
						<div className="row justify-content-center">
							<button
								type="submit"
								onClick={e => handlerClick(e)}
								className="btn boton-naranja xbutton_summit">
								Ingresar <i className="fa fa-arrow-right" aria-hidden="true" />
							</button>
						</div>

						{console.log("Mensaje: ", JSON.stringify(store.user.msg))}
						{console.log("Status: ", JSON.stringify(store.user.status))}
						{console.log("Token: ", JSON.stringify(store.user.token))}
						{store.user.token ? (
							Alerta("Ha ingresado correctamente.", "", "success")
						) : (
							<div className="alert label-form" role="alert">
								{JSON.stringify(store.user.msg)}
							</div>
						)}
						<div>
							<label className="xlabel-form uva">¿No tiene cuenta?</label>{" "}
							<Link to="/registro">
								<a className="xlabel-form uva">Abra una aquí</a>
							</Link>
							<br />
							<label className="xlabel-form carmesi">¿Olvidó su contraseña? </label>{" "}
							<Link to="/restablecer">
								<a className="xlabel-form carmesi">Click aquí</a>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
