import React from "react";
import orwell from "../../img/orwell.jpg";

const Cartilla = () => {
	return (
<<<<<<< HEAD
		<div className="m-auto container">
			<div className="row">
				<div className="col-7 p-0">
					<input
						type="text"
						className="form-control caja-crema"
						id="exampleFormControlInput1"
						placeholder="search"
					/>
				</div>
			</div>
			<div className="row flex-row flex-nowrap overflow-auto">
				<div className="row my-2">
					<div className="col-sm-12 p-0 col-md-4 border">
						<div className="portada portada-img" style={{ backgroundImage: `url(${orwell})` }} />
					</div>
					<div className="col-sm-12 col-md-8 border cartilla">
						<h4>Título:</h4>
						<h5>Autor:</h5>
						<h5>Año:</h5>
						<p className="bold">Sinopsis:</p>
						<p>
							Now that we know who you are, I know who I am. Im not a mistake! It all makes sense! In a
							comic, you know how you can tell who the arch-villains going to be? Hes the exact opposite
							of the hero. And most times theyre friends, like you and me! I shouldve known way back
							when... You know why, David? Because of the kids. They called me Mr Glass.
						</p>
						<div className="d-flex caja-naranja">
							<div className="bold">
								<i className="far fa-heart fa-1x mr-1" />
								Agregar a mis libros
							</div>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
=======
		<div className="cartilla-caja">
			{/* empieza div para imagen de portada */}
			<div className="row my-2">
				<div className="col-sm-12 p-0 col-md-4 xborder">
					<div
						className="portada portada-img mx-auto mx-md-0 mb-2 mb-md-0"
						style={{ backgroundImage: `url(${orwell})` }}
					/>
				</div>
				{/* empieza texto de la cartilla */}
				<div className="col-sm-12 col-md-8 xborder cartilla">
					<h4 className="bold">
						Título: <span className="light">1984</span>
					</h4>
					<h5 className="medium">
						Autor:
						<span className="light">George Orwell</span>
					</h5>
					<h6>
						Año: <span className="light">1949</span>
					</h6>
					<p className="bold">Sinopsis:</p>
					<p>
						Now that we know who you are, I know who I am. Im not a mistake! It all makes sense! In a fever
						comic, you know how you can tell who the arch-villains going to be? Hes the exact opposite of
						the hero. And most times theyre friends, like you and me! I shouldve known way back when... You
						know why, David? Because of the kids. They called me Mr Glass.
					</p>
					{/* empieza favorito publico o Privado */}
					<div className="d-flex caja-naranja">
						<div className="row">
							<div className="bold mr-4">
								<i className="far fa-heart fa-1x mr-1" />
								Agregar a mis libros
							</div>

							<div className="form-check mr-3">
								<input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
>>>>>>> 68aa33119aa609ca0f30515ccef73b28d773e154
								<label className="form-check-label">Público</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
								<label className="form-check-label">Privado</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cartilla;
