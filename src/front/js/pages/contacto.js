import React from "react";

const Contacto = () => {
	return (
		<div className="my-3 container">
			<div className="row justify-content-center">
				<div className="col-sm-12 col-lg-7 crema-f-bg borde-crema rounded15 p-4">
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
					{/* <br /> <br />
					<p className="d-flex text-center border align-items-center text-break">
						<i className="border fas fa-envelope fs-9 naranja p-3" /> contacto@minervabusca.com
					</p>
					<p className="d-flex text-center border align-items-center">
						<i className="border flip-hor fab fa fa-phone fs-9 naranja p-3" /> (506) 8888-9999, (506)
						7777-2222
					</p>
					<p className="d-flex text-center border align-items-center">
						<i className="border fa fa-map-marker fs-9 naranja p-3" /> Avenida 5, Calle 2, San José, Costa
						Rica
					</p> */}
				</div>
			</div>
		</div>
	);
};

export default Contacto;
