import React from "react";

const Contacto = () => {
	return (
		<div className="m-auto container">
			<div className="row justify-content-center">
				<div className="tarjeta col-sm-12 col-lg-7">
					<p className="titulo-formulario text-center">Contáctenos</p>
					<div className="row d-flex align-items-center text-break">
						<div className="flex-column col-xs-12 col-sm-2 p-0 text-center">
							<i className="fas fa-envelope fs-9 naranja p-3" />
						</div>
						<div className="col text-center text-sm-left p-0">contacto@minervabusca.com</div>
					</div>
					<div className="row d-flex align-items-center text-break">
						<div className="flex-column col-xs-12 col-sm-2 p-0 text-center">
							<i className="flip-hor fab fa fa-phone fs-9 naranja p-3" />
						</div>
						<div className="col text-center text-sm-left p-0">(506) 8888-9999, (506) 7777-2222</div>
					</div>
					<div className="row d-flex align-items-center text-break">
						<div className="flex-column col-xs-12 col-sm-2 p-0 text-center">
							<i className="fa fa-map-marker fs-9 naranja p-3" />
						</div>
						<div className="col text-center text-sm-left p-0">Avenida 5, Calle 2, San José, Costa Rica</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacto;
