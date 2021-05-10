import React, { useState, useContext, useEffect } from "react";
import Errorimage from "../../img/no_cover_thumb.gif";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const Cartilla = () => {
	const [] = useState([]);
	const { store, actions } = useContext(Context);
	const [searchTerm, setSearchTerm] = useState("");
	const [books, setBooks] = useState({ items: [] });
	const api_url = "https://www.googleapis.com/books/v1/volumes?q=";
	const api_url_arg = "&country=US&maxResults=10&key=AIzaSyC0VQjxrMlkS7_NqWYG60sV3IF_JVe12Mw";

	const onInputChange = e => {
		setSearchTerm(e.target.value);
	};

	const onSubmitHandler = e => {
		e.preventDefault();
		actions.fetchSearchLibros(searchTerm);
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

	const addMybook = (data, text) => {
		return;
	};
	useEffect(() => {
		actions.fetchSearchLibros("hardcover-fiction");
	}, []);

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
				{store.catalogo.map((item, index) => {
					{
						let url_img =
							"http://books.google.com/books/content?id=" +
							item.id +
							"&printsec=frontcover&img=1&zoom=1&source=gbs_api";
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
									Título:{" "}
									<span className="light">
										{item.volumeInfo.hasOwnProperty("title")
											? item.volumeInfo.title
											: "No se encontro información"}
									</span>
								</h4>
								<h5 className="medium">
									Autor:
									<span className="light">
										{item.volumeInfo.hasOwnProperty("authors")
											? bookAuthors(item.volumeInfo.authors)
											: "No se encontro información"}
									</span>
								</h5>
								<h6>
									Año:{" "}
									<span className="light">
										{item.volumeInfo.hasOwnProperty("publishedDate")
											? item.volumeInfo.publishedDate
											: "No se encontro información"}
									</span>
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
											<nav className="nav">
												<Link className="btn float-left" to={"/bookdetails/" + index}>
													Ver Detalle.
												</Link>
												{"   "}
												<button
													className="btn far fa-heart"
													onClick={() => addMybook(item.name, "book")}>
													{"   "}
													Agregar a mis libros.
												</button>
											</nav>
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

Cartilla.propTypes = {
	data: PropTypes.node.isRequired
};

export default Cartilla;
