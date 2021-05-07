import React, { useState, useContext } from "react";
import Errorimage from "../../img/no_cover_thumb.gif";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

const Cartilla2 = () => {
	const [] = useState([]);
	const { store, actions } = useContext(Context);

	return (
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
			<div className="container">
				<h1 className="title">Catalogo de Libros</h1>
				<div className="row flex-row flex-nowrap overflow-auto">
					{() => state.actions.fetchCatalogoLibros()}
					{store.catalogo.map(item => {
						{
							console.log("URL_Image:::", item);
						}
						return (
							<div className="row my-2" key={item.id}>
								<div className="col-sm-12 p-0 col-md-4 border">
									<div className="portada portada-img">
										<div
											className="portada portada-img mx-auto mx-md-0 mb-2 mb-md-0"
											style={{
												backgroundImage: `url(http://books.google.com/books/content?id=${
													item.id
												}&printsec=frontcover&img=1&zoom=1&source=gbs_api})`
											}}
										/>
									</div>
								</div>
								<div className="col-sm-12 col-md-8 border cartilla">
									<h4>Título: {item.volumeInfo.title}</h4>
									<h5>Autor: {item.volumeInfo.authors}</h5>
									<h5>Año: {item.volumeInfo.publishedDate}</h5>
									<p className="bold">Sinopsis:</p>
									<p>{item.searchInfo.textSnippet}</p>
									<div className="d-flex caja-naranja">
										<div className="bold">
											<i className="far fa-heart fa-1x mr-1" />
											Agregar a mis libros
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
												id="flexCheckDefault"
											/>
											<label className="form-check-label">Público</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
												id="flexCheckChecked"
											/>
											<label className="form-check-label">Privado</label>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
Cartilla2.propTypes = {
	data: PropTypes.node.isRequired
};
export default Cartilla2;