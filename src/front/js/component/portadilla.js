import React from "react";
import orwell from "../../img/orwell.jpg";
import Props from "prop-types";

const Portadilla = () => {
	return (
		<div className="portadilla-caja">
			<div className="p-0">
				<div className="portadilla portadilla-img m-0" style={{ backgroundImage: props.img }} />
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

Portadilla.propTypes = {
	img: Props.string
};

export default Portadilla;
