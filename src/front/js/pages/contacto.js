import React from "react";

const Contacto = () => {
	return (
		<div className="my-3 container">
			<div className="row justify-content-center">
				<div className="col-sm-12 col-lg-7 crema-f-bg borde-crema rounded15 p-4">
					<h3 className="text-center naranja text-uppercase">Contáctenos</h3>
					<p className="d-flex align-items-center">
						<i className="fas fa-envelope fs-9 naranja p-3 text-break" /> contacto@minervabusca.com
					</p>
					<p className="d-flex align-items-center">
						<i className="flip-hor fab fa fa-phone fs-9 naranja p-3" /> (506) 8888-9999, (506) 7777-2222
					</p>
					<p className="d-flex align-items-center">
						<i className="fa fa-map-marker fs-9 naranja p-3" /> Avenida 5, Calle 2, San José, Costa Rica
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contacto;
