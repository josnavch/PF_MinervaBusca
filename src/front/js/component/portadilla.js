import React, { useState, useEffect, useContext } from "react";
import orwell from "../../img/orwell.jpg";
import Props from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

export const Portadilla = props => {
	const { store, actions } = useContext(Context);
	let [imagen, setImagen] = useState("");
	const [show, setShow] = useState(false);

	let usuario = JSON.parse(localStorage.getItem("user"));

	useEffect(() => {
		getImg();
	}, []);

	const handleClose = () => setShow(false);

	const handleShow = async param => {
		let valor = await actions.getInfoMyBook(usuario.id, param);
		let resul =
			"http://books.google.com/books/content?id=" + param + "&printsec=frontcover&img=1&zoom=1&source=gbs_api";
		setImagen(resul);
		console.log("datos del store ", store.Infobook);
		setShow(true);
	};

	let getImg = () => {
		let result =
			"http://books.google.com/books/content?id=" +
			props.img +
			"&printsec=frontcover&img=1&zoom=1&source=gbs_api";
		setImagen(result);
	};

	function mensaje() {
		if (store.mensaje.message) {
			alert(store.mensaje.message);
			actions.setMensaje();
			window.location.replace(process.env.FRONTEND_URL + "/mislibros");
		}
	}
	const Public = (e, libro) => {
		e.preventDefault();
		let index = libro;
		{
			console.log("Index: ", libro);
			console.log("Catalogo: ", store.catalogo);
		}
		actions.publicbook({
			bookid: index,
			userid: usuario.id
		});
	};

	const Borrar = (e, libro) => {
		e.preventDefault();
		let index = libro;
		{
			console.log("Index: ", libro);
			console.log("Catalogo: ", store.catalogo);
		}
		actions.deletebook({
			bookid: index,
			userid: usuario.id
		});
	};
	return (
		<div className="portadilla-caja">
			<div className="p-0">
				<a
					onClick={() => {
						handleShow(props.img);
					}}
					key={props.book}>
					<div className="portadilla portadilla-img m-0" style={{ backgroundImage: `url(${imagen})` }} />
				</a>
			</div>
			<div className="carmesi-bg">
				<div className="d-flex portadilla-footer">
					<div>
						<Link className="xbtn xfloat-left" onClick={e => Public(e, props.book)}>
							{props.public ? "Privado" : "Público"}
						</Link>
						{"   "}
					</div>
					<div className="ml-auto">
						<Link className="xbtn" onClick={e => Borrar(e, props.book)}>
							{"   "}
							<i className="fas fa-trash" />
						</Link>
					</div>
					<div>{mensaje()}</div>
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

Portadilla.propTypes = {
	img: Props.string,
	book: Props.int,
	public: Props.bool
};

export default Portadilla;
