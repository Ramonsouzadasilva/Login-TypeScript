async function loadSetors() {
	const setorList = document.getElementById("setorList");
	setorList.innerHTML = "";

	// Obtém o token do localStorage
	const token = localStorage.getItem("token");

	// Se não houver token, redirecione para a página de login
	if (!token) {
		window.location.href = "login.html";
		return;
	}

	// Fetch setors from the server with token in the Authorization header
	const response = await fetch("http://localhost:3000/setores", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	// Verifica se a resposta foi bem-sucedida antes de continuar
	if (!response.ok) {
		console.error("Erro ao carregar setores:", response.statusText);
		return;
	}

	const setors = await response.json();

	// Populate the table
	setors.forEach((setor) => {
		const row = document.createElement("tr");
		row.innerHTML = `
        <td>${setor.id}</td>
        <td>${setor.nome}</td>
        <td>
            <button  class="btn" onclick="atualizarSetor(${setor.id})">Atualizar</button>
        </td>
		<td>
            <button class="btn" onclick="excluirSetor(${setor.id})">Excluir</button>
        </td>
    `;
		setorList.appendChild(row);
	});
}

async function atualizarSetor(id) {
	const novoNome = prompt("Digite o novo nome do setor:");

	if (novoNome) {
		// Obtém o token do localStorage
		const token = localStorage.getItem("token");

		// Se não houver token, redirecione para a página de login
		if (!token) {
			window.location.href = "login.html";
			return;
		}

		// Simulação de requisição para atualizar o setor
		const response = await fetch(`http://localhost:3000/setores/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ nome: novoNome }),
		});

		if (response.ok) {
			// Atualiza a tabela após a atualização no backend
			loadSetors();
		} else {
			console.error(
				"Erro durante a atualização do setor:",
				response.statusText
			);
		}
	}
}

async function excluirSetor(id) {
	const confirmacao = confirm("Deseja realmente excluir este setor?");

	if (confirmacao) {
		// Obtém o token do localStorage
		const token = localStorage.getItem("token");

		// Se não houver token, redirecione para a página de login
		if (!token) {
			window.location.href = "login.html";
			return;
		}

		// Simulação de requisição para excluir o setor
		const response = await fetch(`http://localhost:3000/setores/${id}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (response.ok) {
			// Remove a linha da tabela após a exclusão no backend
			loadSetors();
		} else {
			console.error("Erro durante a exclusão do setor:", response.statusText);
		}
	}
}

// Chame a função para carregar setores assim que a página for carregada
document.addEventListener("DOMContentLoaded", loadSetors);
