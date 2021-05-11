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
	const [esClick, setEsClick] = useState(false);

	const handlerClick = async e => {
		e.preventDefault();
		let result = await actions.setLogin({
			email: email,
			password: password
		});

		if (store.user.token) {
			Alerta("", "Ha ingresado correctamente.", "success");
		} else if (store.user.msg && store.user.status >= 400) {
			Alerta("", store.user.msg, "warning", setEsClick(false));
			console.log("Mensaje111: ", JSON.stringify(store.user.msg));
		} else {
			ValidarCampos();
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

	const ValidarCampos = () => {
		if (email.length < 1 || email == "") {
			Alerta("", "Debe ingresar un correo electrónico", "warning");
		} else if (email.length < 1 || email == "") {
			Alerta("", "Debe ingresar una contraseña", "warning");
		}
		return false;
	};

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
