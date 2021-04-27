import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3">
		<div className="container">
			<div className="row">
				<div className="col-9 d-flex align-items-center">
					<div className="">MinervaBusca.com &copy; Todos los Derechos Reservados</div>
				</div>
				<div className="col-3">
					<div className="float-right">
						<i className="fab fa-facebook fa-2x mr-3" />
						<i className="fab fa-instagram fa-2x mr-3" />
						<i className="fab fa-twitter fa-2x mr-3" />
						<i className="fab fa-youtube fa-2x" />
					</div>
				</div>
			</div>
		</div>
	</footer>
);
