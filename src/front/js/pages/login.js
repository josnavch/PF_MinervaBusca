import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import iconImageUrl from "../../img/rigo-baby.jpg";
import { Redirect, Route } from "react-router";
import { Link } from "react-router-dom";

import "../../styles/login.scss";
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
		<div className="row w-100 d-flex justify-content-center contenedor">
			<div className="col-5">
				{console.log(store.user.token)}

				<div className="text-center mt-5">
					<form>
						<h1 className="titulo"> INGRESAR </h1>
						<div className="MB-3">
							<div className="input-container">
								<i className="fa fa-user icon" />
								<input
									type="email"
									className="form-control input input-field"
									value={email}
									placeholder="Email address / username"
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
						</div>

						<div className="MB-3">
							<div className="input-container">
								<i className="fa fa-key icon" />
								<input
									value={password}
									onChange={e => setPassword(e.target.value)}
									type="password"
									className="form-control input input-field"
									placeholder="Password"
								/>
							</div>
						</div>
						<button type="submit" onClick={e => handlerClick(e)} className="btn button_summit">
							Ingresar <i className="fa fa-arrow-right" aria-hidden="true" />
						</button>
						{console.log("Mensaje: ", JSON.stringify(store.user.msg))}
						{console.log("Status: ", JSON.stringify(store.user.status))}
						{console.log("Token: ", JSON.stringify(store.user.token))}
						{store.user.token ? (
							alert("Login Succesfully!!")
						) : (
							<div className="alert label-form" role="alert">
								{JSON.stringify(store.user.msg)}
							</div>
						)}
						<div>
							<label className="label-form">¿No tiene cuenta?</label>{" "}
							<Link to="/registro">
								<a className="label-form">Abra una aquí</a>
							</Link>
							<label className="label-form">¿Olvidó su contraseña? </label>{" "}
							<Link to="/restablecer">
								<a className="label-form">Click aquí</a>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
