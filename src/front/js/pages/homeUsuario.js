import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { Link } from "react-router-dom";

import "../../styles/stylesRegistroHomeusuario.scss";

export const HomeUsuario = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container ">
			<h1>Hello Word</h1>
		</div>
	);
};
