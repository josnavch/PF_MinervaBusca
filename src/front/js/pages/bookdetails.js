import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

import Errorimage from "../../img/no_cover_thumb.gif";

export const BookDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let usuario = JSON.parse(localStorage.getItem("user"));

	let index = params.id;

	function getURL(id) {
		const imgURL1 = "http://books.google.com/books/content?id=";
		const imgURL2 = "&printsec=frontcover&img=1&zoom=1&source=gbs_api";
		let url = imgURL1.concat(id, imgURL2);
		return url;
	}

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

	const bookISBN = isbn => {
		let str = "";
		isbn.forEach(element => {
			str = str.concat(element.type, ":", element.identifier, " | ");
		});
		return str;
	};

	function getToday() {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1; //As January is 0.
		var yyyy = today.getFullYear();

		if (dd < 10) dd = "0" + dd;
		if (mm < 10) mm = "0" + mm;
		return yyyy + "-" + mm + "-" + dd;
	}

	function mensaje() {
		if (store.mensaje.message) {
			alert(store.mensaje.message);
			actions.setMensaje();
		}
	}

	const Guardar = e => {
		e.preventDefault();
		var today = getToday();

		actions.addMybook({
			book_id: store.catalogo[index].id,
			user_id: usuario.id,
			is_public: false,
			title: store.catalogo[index].volumeInfo.hasOwnProperty("title")
				? store.catalogo[index].volumeInfo.title
				: "No se encontro información",
			authors: store.catalogo[index].volumeInfo.hasOwnProperty("authors")
				? bookAuthors(store.catalogo[index].volumeInfo.authors)
				: "No se encontro información",
			publisher: store.catalogo[index].volumeInfo.hasOwnProperty("authors")
				? bookAuthors(store.catalogo[index].volumeInfo.authors)
				: "No se encontro información",
			publishedDate: store.catalogo[index].volumeInfo.hasOwnProperty("publishedDate")
				? store.catalogo[index].volumeInfo.publishedDate
				: "No se encontro información",
			pageCount: store.catalogo[index].volumeInfo.hasOwnProperty("pageCount")
				? store.catalogo[index].volumeInfo.pageCount
				: "No se encontro información",
			isbn: store.catalogo[index].volumeInfo.hasOwnProperty("industryIdentifiers")
				? bookISBN(store.catalogo[index].volumeInfo.industryIdentifiers)
				: "No se encontro información",
			categories: store.catalogo[index].volumeInfo.hasOwnProperty("categories")
				? bookAuthors(store.catalogo[index].volumeInfo.categories)
				: "No se encontro información",
			description: store.catalogo[index].volumeInfo.hasOwnProperty("description")
				? store.catalogo[index].volumeInfo.description
				: "No se encontro información",
			fechacompra: today
		});
		//window.location.replace(process.env.FRONTEND_URL + "/");
	};

	return (
		<div>
			<div className="m-auto container">
				<div className="row d-flex my-5">
					<div className="col-md-3 xalign-self-center pb-2">
						<img
							src={getURL(store.catalogo[index].id)}
							className="card-img-top"
							onError={e => ((e.target.onerror = null), (e.target.src = Errorimage))}
						/>
					</div>
					<div className="col xalign-self-center pb-2 title">
						<h2>
							Título:{" "}
							{store.catalogo[index].volumeInfo.hasOwnProperty("title")
								? store.catalogo[index].volumeInfo.title
								: "No se encontro información"}
						</h2>
						<ul>
							<li>
								<b>Author(s): </b>
								{store.catalogo[index].volumeInfo.hasOwnProperty("authors")
									? bookAuthors(store.catalogo[index].volumeInfo.authors)
									: "No se encontro información"}
							</li>
							<li>
								<b>Editorial: </b>
								{store.catalogo[index].volumeInfo.hasOwnProperty("publisher")
									? store.catalogo[index].volumeInfo.publisher
									: "No se encontro información"}
							</li>
							<li>
								<b>Fecha Publicación: </b>
								{store.catalogo[index].volumeInfo.hasOwnProperty("publishedDate")
									? store.catalogo[index].volumeInfo.publishedDate
									: "No se encontro información"}
							</li>
							<li>
								<b>ISBN: </b>
								{store.catalogo[index].volumeInfo.hasOwnProperty("industryIdentifiers")
									? bookISBN(store.catalogo[index].volumeInfo.industryIdentifiers)
									: "No se encontro información"}
							</li>
							<li>
								<b>Page Count: </b>
								{store.catalogo[index].volumeInfo.hasOwnProperty("pageCount")
									? store.catalogo[index].volumeInfo.pageCount
									: "No se encontro información"}
							</li>
							<li>
								<b>Categorias: </b>
								{store.catalogo[index].volumeInfo.hasOwnProperty("categories")
									? bookAuthors(store.catalogo[index].volumeInfo.categories)
									: "No se encontro información"}
							</li>
							<li>
								<b>Descripción: </b>
								{store.catalogo[index].volumeInfo.hasOwnProperty("description")
									? store.catalogo[index].volumeInfo.description
									: "No se encontro información"}
							</li>
						</ul>
						<div className="row">
							<Link to="/catalogo" className="boton-naranja mr-1 xbtn xbtn-outline-warning bxtn-lg">
								<span>Regresar al Catálago</span>
							</Link>{" "}
							<Link className="boton-naranja xbtn xbtn-outline-success xbtn-lg" onClick={e => Guardar(e)}>
								Agregar a mis Libros
							</Link>
							<div>{mensaje()}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
BookDetails.propTypes = {
	match: PropTypes.object
};
