const cadastroForm = document.getElementById("cadastroForm");

cadastroForm.addEventListener("submit", async function (event) {
	event.preventDefault();

	const nome = document.getElementById("cadastroNome").value;
	const email = document.getElementById("cadastroEmail").value;
	const password = document.getElementById("cadastroPassword").value;

	try {
		// Simulação de requisição de cadastro
		const response = await fetch("http://localhost:3000/user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name: nome, email: email, password: password }), // Ajuste aqui
		});

		if (response.ok) {
			// Redirecione para a página de login após o cadastro bem-sucedido
			window.location.href = "/index.html";
		} else {
			console.error("Erro durante o cadastro:", response.statusText);
		}
	} catch (error) {
		console.error("Erro durante o cadastro:", error);
	}
});
