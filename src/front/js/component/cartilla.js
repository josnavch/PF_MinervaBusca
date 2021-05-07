import React, { useState, useContext, useEffect } from "react";
import Errorimage from "../../img/no_cover_thumb.gif";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

const Cartilla = () => {
	const [] = useState([]);
	const { store, actions } = useContext(Context);
	const [searchTerm, setSearchTerm] = useState("");
	const [books, setBooks] = useState({ items: [] });
	const api_url = "https://www.googleapis.com/books/v1/volumes?q=";
	const api_url_arg = "&country=US&maxResults=10&key=AIzaSyC0VQjxrMlkS7_NqWYG60sV3IF_JVe12Mw";

	const fetchSearchLibros = async () => {
		console.log("Search Books: ", searchTerm);
		let url = api_url.concat(searchTerm, api_url_arg);
		let res = await fetch(url);
		const data = await res.json();
		console.log("Data Search Books -->", data.items);
		setBooks(data);
	};

	const onInputChange = e => {
		setSearchTerm(e.target.value);
	};

	const onSubmitHandler = e => {
		e.preventDefault();
		fetchSearchLibros();
	};

	const bookAuthors = authors => {
		if (authors.length <= 2) {
			authors = authors.join(" and ");
		} else if (authors.length > 2) {
			let lastAuthor = " and " + authors.slice(-1);
			authors.pop();
			authors = authors.join(", ");
			authors += lastAuthor;
		}
		return authors;
	};

	function getURL(id) {
		const imgURL1 = "http://books.google.com/books/content?id=";
		const imgURL2 = "&printsec=frontcover&img=1&zoom=1&source=gbs_api";
		let url = imgURL1.concat(id, imgURL2);
		return url;
	}

	return (
		<div className="m-auto container">
			{/* empieza div para search */}
			<div className="my-3">
				<div className="row mb-5">
					<div className="caja-crema col-md-6">
						<form onSubmit={onSubmitHandler}>
							<div className="input-group icon-input-group flex-nowrap">
								<input
									type="search"
									className="icon-form-control input input-field"
									placeholder="buscar"
									value={searchTerm}
									onChange={onInputChange}
								/>
								<button type="submit" className="input-group-text">
									<i className="fas fa-search faa-lg icon" />
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="cartilla-caja">
				{/* empieza div para imagen de portada */}
				{/*() => state.actions.fetchSearchLibros("Harry+Potter")*/}
				{books.items.map((item, index) => {
					{
						let url_img =
							"http://books.google.com/books/content?id=" +
							item.id +
							"&printsec=frontcover&img=1&zoom=1&source=gbs_api";
						console.log("URL_Image:::", item);
						console.log(item.hasOwnProperty("searchInfo"));
					}
					return (
						<div className="row my-2" key={index}>
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
									<span className="light">{bookAuthors(item.volumeInfo.authors)}</span>
								</h5>
								<h6>
									Año: <span className="light">{item.volumeInfo.publishedDate}</span>
								</h6>
								<p className="bold">Sinopsis:</p>
								<p>
									{item.hasOwnProperty("searchInfo")
										? item.searchInfo.textSnippet
										: "No se encontro información"}
								</p>
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
			</div>
		</div>
	);
};

export default Cartilla;
