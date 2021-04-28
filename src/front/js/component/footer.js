import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/footer.scss";

export const Footer = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");

	function logout() {
		localStorage.clear();
		window.location.replace(process.env.FRONTEND_URL + "/");
	}
	return (
		<div>
			<footer className="footer mt-auto py-3">
				<div className="container">
					<div className="row">
						<div className="col-6 d-flex align-items-center">
							<div className="">MinervaBusca.com, &copy; todos los derechos reservados</div>
						</div>
						<div className="col-3">
							<div className="float-right">
								<i className="fab fa-facebook fa-2x mr-3" />
								<i className="fab fa-instagram fa-2x mr-3" />
								<i className="fab fa-twitter fa-2x mr-3" />
								<i className="fab fa-youtube fa-2x" />
							</div>
						</div>
						<div className="col-3">
							<button className="btn btn-outline-info button_logout" onClick={() => logout()}>
								Loguot
							</button>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};
