import React from "react";
import Portadilla from "../component/portadilla";

const Mislibros = () => {
	return (
		<div className="m-auto container">
			{/* empieza div para search */}
			<div className="my-3">
				<div className="row mb-5">
					<div className="caja-crema col-md-6">
						<div className="input-group icon-input-group flex-nowrap">
							<input type="text" className="icon-form-control input input-field" placeholder="buscar" />
							<button type="button" className="input-group-text">
								<i className="fas fa-search faa-lg icon" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Portadilla />
			</div>
			<h3>Mis Libros</h3>
			<h3>Libros Públicos</h3>
			<h3>Libros Privados</h3>
		</div>
	);
};

export default Mislibros;
