import React, { useState, useEffect, useContext } from "react";
import Portadilla from "../component/portadilla";
import { Context } from "../store/appContext";

const Mislibros = () => {
	const { store, actions } = useContext(Context);
	let usuario = JSON.parse(localStorage.getItem("user"));
	useEffect(() => {
		actions.getMybooks(usuario.id);
		actions.getMyPrivatebooks(usuario.id);
		actions.getMyPublicbooks(usuario.id);
	}, []);
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
			<h2 className="uva bold">Mis Libros</h2>
			<div className="carrusel">
				<div className="horizontal-scroll-wrapper">
					{store.book.map((item, index) => {
						return <Portadilla key={index} img={item.book_id} />;
					})}
				</div>
			</div>
			<h2 className="uva bold">Libros Públicos</h2>
			<div className="carrusel">
				<div className="horizontal-scroll-wrapper">
					{store.Publicbook.map((item, index) => {
						return <Portadilla key={index} img={item.book_id} />;
					})}
				</div>
			</div>
			<h2 className="uva bold">Libros Privados</h2>
			<div className="carrusel">
				<div className="horizontal-scroll-wrapper">
					{store.privatebook.map((item, index) => {
						return <Portadilla key={index} img={item.book_id} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Mislibros;
