import React from "react";
import orwell from "../../img/orwell.jpg";

const Portadilla = () => {
	return (
		<div className="m-auto container">
			<h1>Portadilla componente</h1>
			<div className="col">
				<div className="col p-0 border border-warning">
					<div
						className="portadilla portadilla-img mx-auto mx-md-0 mb-2 mb-md-0"
						style={{ backgroundImage: `url(${orwell})` }}
					/>
				</div>
				<div className="col border border-primary">footer portada</div>
			</div>
		</div>
	);
};

export default Portadilla;
