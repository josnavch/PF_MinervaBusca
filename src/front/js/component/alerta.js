import swal from "sweetalert";
//tipo alerta
/**
 * error
 * success
 * warning
 * info
 */
export const Alerta = (titulo, texto, tipoAlerta) => {
	swal({
		title: titulo,
		text: texto,
		icon: tipoAlerta,
		buttons: "Aceptar"
	});
};

export const AlertaConfirmacion = (titulo, texto, tipoAlerta) => {
	return swal({
		title: titulo,
		text: texto,
		icon: tipoAlerta,
		buttons: {
			cancel: "Cancelar",
			confirm: "Aceptar"
		}
	});
};

/** Ejemplo donde queremos crear el elemento o llamandolos.
 * *-----------------------------------------------------
 * tipo alerta
/**
 * error
 * success
 * warning
 * info
 *----------------------------------------------------
 * noitificaciones normales
 * <button
				onClick={() => {
					Alerta("Encabezado del mensaje", "descripcion del mensaje(body)", "tipo de alerta")
				}}>
                Button
                
 * Cuando queremos tener la confirmacion del usuario en caso de eliminar
 * <button
				onClick={() => {
                    AlertaConfirmacion("Encabezado del mensaje", "descripcion del mensaje(body)", "tipo de alerta")
                    .then(value => { ---.then es lo que debemos implementar dependiendo de la eleccion, en caso de ser  que hizo click lo llevamos a eliminar o no salimos
						if (value) {
							swal("Poof! Your imaginary file has been deleted!", {
								icon: "success"
							});
						} else {
							swal("Your imaginary file is safe!");
						}
					});
				}}>
				Button
			</button>
 *
 * **/
