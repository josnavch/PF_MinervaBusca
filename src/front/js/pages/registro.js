import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/stylesRegistroHomeusuario.scss";

export const Registro = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [nombre, setNombre] = useState("");
	const [ced, setCed] = useState("");
	const [tel, setTel] = useState("");
	let [valid, setValid] = useState("");
	let [feedback, setFeedback] = useState("");
	let [dato, setDato] = useState("");

	const Registrar = e => {
		e.preventDefault();
		if (password != password2) {
			setValid("is-invalid");
			setFeedback("invalid-feedback");
			setDato("Las contraseñas no coinciden");
		} else {
			if (email != "" && password != "" && nombre != "" && ced != "" && tel != "") {
				actions.crearUser({
					email: email,
					password: password,
					name: nombre,
					id_number: ced,
					phone: tel
				});
				alert("Registro exitoso!!");
			} else {
				alert("Algunos campos están en blanco, por favor complete todos los espacios");
			}
		}
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-4 col-sm-2" />
				<div className="col-lg-4 col-sm-8">
					<div className="card m-3 p-3 formCard">
						<h4 className="mb-3 text-center naranja">FORMULARIO DE REGISTRO</h4>
						<div className="row">
							<div className="col-12">
								<form>
									<div className="form-group">
										<input
											type="email"
											className="form-control input"
											value={email}
											onChange={e => setEmail(e.target.value)}
											placeholder="Correo electrónico"
										/>
									</div>

									<div className="form-group">
										<input
											type="password"
											className="form-control input"
											value={password}
											onChange={e => setPassword(e.target.value)}
											placeholder="Contraseña"
										/>
									</div>
									<div className="form-group">
										<input
											type="password"
											className={"form-control input " + valid}
											value={password2}
											onChange={e => setPassword2(e.target.value)}
											placeholder="Confirme su contraseña"
										/>
										<small className={feedback}>{dato}</small>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control input"
											value={nombre}
											onChange={e => setNombre(e.target.value)}
											placeholder="Nombre completo"
										/>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control input"
											value={ced}
											onChange={e => setCed(e.target.value)}
											placeholder="Cédula"
										/>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control input"
											value={tel}
											onChange={e => setTel(e.target.value)}
											placeholder="Teléfono"
										/>
									</div>
									<div className="centrar">
										<button
											type="submit"
											onClick={e => Registrar(e)}
											className="btn btn-warning btn-lg center mb-4 mt-3 input">
											Crear cuenta &#62;
										</button>
									</div>
								</form>
								<p className="text-center p">
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
