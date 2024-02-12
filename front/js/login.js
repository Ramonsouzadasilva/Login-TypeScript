document.addEventListener("DOMContentLoaded", function () {
	const loginForm = document.getElementById("loginForm");

	loginForm.addEventListener("submit", async function (event) {
		event.preventDefault();

		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;

		try {
			const response = await fetch("http://localhost:3000/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			});

			if (response.ok) {
				const { token } = await response.json();
				localStorage.setItem("token", token);
				window.location.href = "../pages/setores.html";
			} else {
				console.error("Erro no login:", response.statusText);
			}
		} catch (error) {
			console.error("Erro durante a requisição de login:", error);
		}
	});
});
