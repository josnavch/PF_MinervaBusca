import React from "react";

const Contacto = () => {
	return (
		<div className="my-3 container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center naranja-bg">
					<h1>Contáctenos</h1>
					<p>
						<i className="fas fa-envelope fa-2x" /> contacto@minervabusca.com
					</p>
					<p>
						<i className="flip-hor fab fa fa-phone fa-2x" /> (506) 8888-9999, (506) 7777-2222
					</p>
					<p>
						<i className="fa fa-map-marker fa-2x" /> Avenida 5, Calle 2, San José, Costa Rica
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contacto;
