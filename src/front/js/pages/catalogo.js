import React from "react";
import Cartilla2 from "../component/cartilla2";
import Cartilla from "../component/cartilla";

const Catalogo = () => {
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
				<Cartilla2 />
			</div>
		</div>
	);
};

export default Catalogo;
