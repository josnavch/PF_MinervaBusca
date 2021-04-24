import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import iconImageUrl from "../../img/rigo-baby.jpg";
import { Redirect, Route } from "react-router";

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
		<div className="row w-100 d-flex justify-content-center">
			<div className="col-5">
				{console.log(store.user.token)}

				<div className="text-center mt-5">
					<h1> Login </h1>

					<form>
						<div className="MB-3">
							<label className="form-label">Email address</label>
							<input
								type="email"
								className="form-control input"
								value={email}
								placeholder="Email address / username"
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="MB-3">
							<label className="form-label">Password</label>
							<input
								value={password}
								onChange={e => setPassword(e.target.value)}
								type="password"
								className="form-control input"
							/>
						</div>
						<button type="submit" onClick={e => handlerClick(e)} className="btn btn-primary">
							Submit
						</button>
						{console.log("Valida: ", JSON.stringify(store.user.msg))}
						{store.user !== "" ? (
							<div className="alert alert-info overflow-auto">{JSON.stringify(store.user.token)}</div>
						) : null}
					</form>
				</div>
			</div>
		</div>
	);
};
