import { NuevaContrasena } from "../component/fomularioNuevaConstrasena";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,

			user: {
				email: "",
				expires: "",
				token: null,
				refresh_token: null,
				name: "",
				id_number: "",
				phone: "",
				status: "",
				msg: ""
			},
			catalogo: [],

			userRestore: {
				email: "",
				expires: "",
				token: null,
				name: "",
				url: "",
				flag: false
			},
			estadoEnviado: ""
		},
		actions: {
			// Use getActions to call a function within a fuction
			getToken: () => {
				const tokenLocal = localStorage.getItem("token");
				const refreshtokenLocal = localStorage.getItem("refres_token");
				const userLocal = JSON.parse(localStorage.getItem("user"));

				setStore({
					user: {
						token: tokenLocal,
						refres_token: refreshtokenLocal,
						user: userLocal
					}
				});
				console.log("-->", tokenLocal);
				console.log("-->", refreshtokenLocal);
				console.log("-->", JSON.stringify(userLocal));

				if (tokenLocal) {
					window.location.replace(process.env.FRONTEND_URL + "/casa");
				}
			},

			setLogin: user => {
				const additionalSettings = {
					method: "POST",
					header: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(user)
				};
				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--data--", data);
						if (data.token) {
							localStorage.clear();
							setStore({ user: data });
							localStorage.setItem("token", data.token);
							localStorage.setItem("refresh_token", data.refresh_token);
							localStorage.setItem("user", JSON.stringify(data.user));
							window.location.replace(process.env.FRONTEND_URL + "/casa");
						} else {
							console.log("Error Login", data);
							setStore({ user: data });
							localStorage.clear();
						}

						if (typeof Storage == "undefined") {
							console.log("LocalStorage no Soportado en este navegador");
						}
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

			setLogout: user => {
				localStorage.removeItem(user);
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			ChangePassword: async (email, nuevaContrasena) => {
				let result = {};
				let userData = {
					email: email,
					nuevaContrasena: nuevaContrasena
				};
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: JSON.stringify(userData),
					redirect: "follow"
				};

				let resp = await fetch(process.env.BACKEND_URL + "/api/changePassword", requestOptions)
					.then(resp => resp.json())
					.then(data => {
						if (data.status == 200) {
							result = data;
						} else {
							result = data;
						}
					})
					.catch(error => (result.message = "Se ha generado un error con el servidor"));

				return result;
			},
			sendRestoreEmail: async userData => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				let response = {};
				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: JSON.stringify(userData),
					redirect: "follow"
				};

				let result = await fetch(process.env.BACKEND_URL + "/api/sendRestoreEmail", requestOptions)
					.then(resp => resp.json())
					.then(data => {
						if (data.status == 200) {
							response = data;
						} else {
							response = data;
						}
					})
					.catch(error => {
						response.message = "Se ha generado un eror con el servidor";
					});
				return response;
			},

			crearUser: user => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: JSON.stringify(user),
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/registro", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},

			fetchCatalogoLibros: async () => {
				console.log("Haciendo fetch de Google Books");
				let res = await fetch(
					"https://www.googleapis.com/books/v1/volumes?q=Potter+inauthor:rowling&country=US&maxResults=10&key=AIzaSyC0VQjxrMlkS7_NqWYG60sV3IF_JVe12Mw"
				);
				const data = await res.json();
				console.log("Data-->", data.items);
				setStore({ catalogo: data.items });
			},

			fetchSearchLibros: async query => {
				console.log("Haciendo fetch de Google Books");
				console.log("Search Books: ", query);
				const api_url = "https://www.googleapis.com/books/v1/volumes?q=";
				const api_url_arg = "&country=US&maxResults=10&key=AIzaSyC0VQjxrMlkS7_NqWYG60sV3IF_JVe12Mw";
				let url = api_url.concat(query, api_url_arg);
				let res = await fetch(url);

				const data = await res.json();
				console.log("Data fetchSearchLibros-->", data.items);
				setStore({ catalogo: data.items });
            }
            
            
		}
	};
};

export default getState;
