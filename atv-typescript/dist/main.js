"use strict";
// 2. Variável de Estado Global
let pessoas = [];
let nextId = 1;
// 3. Seleção de Elementos DOM
const form = document.getElementById("cadastro-form");
const nomeInput = document.getElementById("nome");
const telefoneInput = document.getElementById("telefone");
const listaPessoasBody = document.querySelector("#lista-pessoas tbody");
// 4. Funções de Manipulação
function adicionarPessoa(nome, telefone) {
    const novaPessoa = {
        id: nextId++,
        nome: nome,
        telefone: telefone,
    };
    pessoas.push(novaPessoa);
    renderizarLista();
}
function removerPessoa(id) {
    pessoas = pessoas.filter((p) => p.id !== id);
    renderizarLista();
}
function renderizarLista() {
    listaPessoasBody.innerHTML = ""; // Limpa o corpo da tabela
    pessoas.forEach((pessoa) => {
        const row = listaPessoasBody.insertRow();
        // Célula Nome
        row.insertCell().textContent = pessoa.nome;
        // Célula Telefone
        row.insertCell().textContent = pessoa.telefone;
        // Célula Ações (Botão Remover)
        const acoesCell = row.insertCell();
        const removerBtn = document.createElement("button");
        removerBtn.textContent = "Remover";
        removerBtn.classList.add("remover-btn");
        removerBtn.onclick = () => removerPessoa(pessoa.id);
        acoesCell.appendChild(removerBtn);
    });
}
// 5. Listener de Evento do Formulário
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o recarregamento da página
    const nome = nomeInput.value.trim();
    const telefone = telefoneInput.value.trim();
    if (nome && telefone) {
        adicionarPessoa(nome, telefone);
        // Limpar o formulário
        nomeInput.value = "";
        telefoneInput.value = "";
        nomeInput.focus();
    }
    else {
        alert("Por favor, preencha todos os campos.");
    }
});
// 6. Chamada Inicial (para garantir que a lista esteja vazia ao iniciar)
renderizarLista();
