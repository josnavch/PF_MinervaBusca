import React, { useState, useEffect, useContext } from "react";
import Portadilla from "../component/portadilla";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

const Mislibros = () => {
	const { store, actions } = useContext(Context);
	let usuario = JSON.parse(localStorage.getItem("user"));
	const [show, setShow] = useState(false);
	let [imagen, setImagen] = useState("");
	const handleClose = () => setShow(false);
	const handleShow = async param => {
		let valor = await actions.getInfoMyBook(usuario.id, param);
		let resul =
			"http://books.google.com/books/content?id=" + param + "&printsec=frontcover&img=1&zoom=1&source=gbs_api";
		setImagen(resul);
		console.log("datos del store ", store.Infobook);
		setShow(true);
	};

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
						return (
							<a
								onClick={() => {
									handleShow(item.book_id);
								}}
								key={index}>
								<Portadilla img={item.book_id} />
							</a>
						);
					})}
				</div>
			</div>
			<h2 className="uva bold">Libros Públicos</h2>
			<div className="carrusel">
				<div className="horizontal-scroll-wrapper">
					{store.Publicbook.map((item, index) => {
						return (
							<a
								onClick={() => {
									handleShow(item.book_id);
								}}
								key={index}>
								<Portadilla img={item.book_id} />
							</a>
						);
					})}
				</div>
			</div>
			<h2 className="uva bold">Libros Privados</h2>
			<div className="carrusel">
				<div className="horizontal-scroll-wrapper">
					{store.privatebook.map((item, index) => {
						return (
							<a
								onClick={() => {
									handleShow(item.book_id);
								}}
								key={index}>
								<Portadilla img={item.book_id} />
							</a>
						);
					})}
				</div>
			</div>

			<Modal show={show} onHide={handleClose} size="lg" backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Información</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<div className="float-left p-4">
							<img src={imagen} />
						</div>
						<div className="float-rigth">
							<p>
								{store.Infobook
									? "Título: " + store.Infobook.title
									: "Título: No se encontró información"}
							</p>
							<p>
								{store.Infobook
									? "Autor: " + store.Infobook.authors
									: "Autor: No se encontró información"}
							</p>
							<p>
								{store.Infobook
									? "Categoría: " + store.Infobook.categories
									: "Categoría: No se encontró información"}
							</p>
							<p>
								{store.Infobook ? "ISBN: " + store.Infobook.isbn : "ISBN: No se encontró información"}
							</p>
							<p>
								{store.Infobook
									? "Publisher: " + store.Infobook.publisher
									: "Publisher: No se encontró información"}
							</p>
							<p>
								{store.Infobook
									? "Fecha de publicación: " + store.Infobook.publishedDate
									: "Fecha de publicación: No se encontró información"}
							</p>
							<p>
								{store.Infobook
									? "PageCount: " + store.Infobook.pageCount
									: "PageCount: No se encontró información"}
							</p>
							<p>
								{store.Infobook
									? "Fecha de compra: " + store.Infobook.fechacompra
									: "Fecha de compra: No se encontró información"}
							</p>
							<p>
								{store.Infobook
									? store.Infobook.is_public
										? "Público: Sí"
										: "Público: No"
									: "Público: No se encontró información"}
							</p>
							<p>
								{store.Infobook
									? "Descripción: " + store.Infobook.description
									: "Descripción: No se encontró información"}
							</p>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Cerrar
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Mislibros;
