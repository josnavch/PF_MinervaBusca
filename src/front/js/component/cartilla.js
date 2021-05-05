import React from "react";
import orwell from "../../img/orwell.jpg";

const Cartilla = () => {
	return (
		<div className="m-auto container">
			<div className="row my-2">
				<div className="col-sm-12 p-0 col-md-4 border border-primary">
					<div className="portada portada-img" style={{ backgroundImage: `url(${orwell})` }} />
				</div>
				<div className="col-sm-12 col-md-8 border border-danger">2</div>
			</div>
		</div>
	);
};

export default Cartilla;
