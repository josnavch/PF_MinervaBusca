import React from "react";
import orwell from "../../img/orwell.jpg";

const Portadilla = () => {
	return (
		<div className="portadilla-caja">
			<div className="p-0">
				<div className="portadilla portadilla-img m-0" style={{ backgroundImage: `url(${orwell})` }} />
			</div>
			<div className="carmesi-bg">
				<div className="d-flex portadilla-footer">
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
						<label className="form-check-label">Privado</label>
					</div>
					<div className="ml-auto">
						<i className="fas fa-trash" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portadilla;
