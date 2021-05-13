import React, { useState, useEffect, useContext } from "react";
import Portadilla from "../component/portadilla";
import { Context } from "../store/appContext";

const Mislibros = () => {
	const { store, actions } = useContext(Context);
	let usuario = JSON.parse(localStorage.getItem("user"));
	const [show, setShow] = useState(false);
	let [imagen, setImagen] = useState("");
	const [searchTerm, setSearchTerm] = useState("");

	const handleClose = () => setShow(false);

	const handleShow = async param => {
		let valor = await actions.getInfoMyBook(usuario.id, param);
		let resul =
			"http://books.google.com/books/content?id=" + param + "&printsec=frontcover&img=1&zoom=1&source=gbs_api";
		setImagen(resul);
		console.log("datos del store ", store.Infobook);
		setShow(true);
	};

	const onInputChange = e => {
		setSearchTerm(e.target.value);
	};

	const onSubmitHandler = e => {
		e.preventDefault();
		actions.SearchMisLibros({
			userid: usuario.id,
			booksearch: searchTerm
		});
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
			<h2 className="uva bold">Mis Libros</h2>
			<div className="carrusel">
				<div className="horizontal-scroll-wrapper">
					{store.book.map((item, index) => {
						return (
							<div key={index}>
								<Portadilla img={item.book_id} book={item.id} public={item.is_public} />
							</div>
						);
					})}
				</div>
			</div>
			<h2 className="uva bold">Libros Públicos</h2>
			<div className="carrusel">
				<div className="horizontal-scroll-wrapper">
					{store.Publicbook.map((item, index) => {
						return (
							<div key={index}>
								<Portadilla img={item.book_id} book={item.id} public={item.is_public} />
							</div>
						);
					})}
				</div>
			</div>
			<h2 className="uva bold">Libros Privados</h2>
			<div className="carrusel">
				<div className="horizontal-scroll-wrapper">
					{store.privatebook.map((item, index) => {
						return (
							<div key={index}>
								<Portadilla img={item.book_id} book={item.id} public={item.is_public} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Mislibros;
