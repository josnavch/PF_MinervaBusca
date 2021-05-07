import React, { useState, useContext } from "react";
import Errorimage from "../../img/no_cover_thumb.gif";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

const Cartilla = () => {
	const [] = useState([]);
	const { store, actions } = useContext(Context);

	function getURL(id) {
		const imgURL1 = "http://books.google.com/books/content?id=";
		const imgURL2 = "&printsec=frontcover&img=1&zoom=1&source=gbs_api";
		let url = imgURL1.concat(id, imgURL2);
		return url;
	}

	return (
		<div className="cartilla-caja">
			{/* empieza div para imagen de portada */}
			{() => state.actions.fetchCatalogoLibros()}
			{store.catalogo.map(item => {
				{
					let url_img =
						"http://books.google.com/books/content?id=" +
						item.id +
						"&printsec=frontcover&img=1&zoom=1&source=gbs_api";
					console.log("URL_Image:::", item);
				}
				return (
					<div className="row my-2" key={item.id}>
						<div className="col-sm-12 p-0 col-md-4 xborder">
							<div
								className="portada portada-img mx-auto mx-md-0 mb-2 mb-md-0"
								style={{ backgroundImage: `url(${getURL(item.id)})` }}
							/>
						</div>
						{/* empieza texto de la cartilla */}
						<div className="col-sm-12 col-md-8 xborder cartilla">
							<h4 className="bold">
								Título: <span className="light">{item.volumeInfo.title}</span>
							</h4>
							<h5 className="medium">
								Autor:
								<span className="light">{item.volumeInfo.authors}</span>
							</h5>
							<h6>
								Año: <span className="light">{item.volumeInfo.publishedDate}</span>
							</h6>
							<p className="bold">Sinopsis:</p>
							<p>{item.searchInfo.textSnippet}</p>
							{/* empieza favorito publico o Privado */}
							<div className="d-flex caja-naranja">
								<div className="row">
									<div className="bold mr-4">
										<i className="far fa-heart fa-1x mr-1" />
										Agregar a mis libros
									</div>

									<div className="form-check mr-3">
										<input
											className="form-check-input"
											type="checkbox"
											value=""
											id="flexCheckChecked"
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
					</div>
				);
			})}
			;
		</div>
	);
};

export default Cartilla;
