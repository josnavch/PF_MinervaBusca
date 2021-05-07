import React from "react";
import Cartilla2 from "../component/cartilla2";

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
<<<<<<< HEAD
				<Cartilla2 />
=======
				<Cartilla />
				<Cartilla />
				<Cartilla />
				<Cartilla />
>>>>>>> 68aa33119aa609ca0f30515ccef73b28d773e154
			</div>
		</div>
	);
};

export default Catalogo;
