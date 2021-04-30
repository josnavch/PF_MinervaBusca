const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
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
			userRestore: {
				email: "",
				expires: "",
				token: null,
				name: "",
				url: "",
				flag: false
			},
			estadoEnviado: false
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
					window.location.replace(process.env.FRONTEND_URL + "/demo");
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
							window.location.replace(process.env.FRONTEND_URL + "/demo");
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

			sendRestoreEmail: email => {
				let userData = {
					email: email,
					url: process.env.FRONTEND_URL
				};

				fetch(process.env.BACKEND_URL + "/api/sendRestoreEmail", {
					method: "POST",
					body: JSON.stringify(userData),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(resp => resp.json())
					.then(data => setStore({ estadoEnviado: true }))
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;
