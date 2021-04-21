import React from "react";
import "../../styles/stylesRegistroHomeusuario.scss";

export const HomeUsuario = () => {
	return (
		<div className="mt-5">
			<div className="row">
				<div className="col-6">
					<a href="#1" className="linkDiv">
						<div className="uno d-flex align-items-center justify-content-center">
							<h1>Buscar y comprar</h1>
						</div>
					</a>
				</div>
				<div className="col-6">
					<a href="#2" className="linkDiv">
						<div className="dos d-flex align-items-center justify-content-center">
							<h1>Mis libros</h1>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};
