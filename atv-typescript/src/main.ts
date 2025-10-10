// 1. Definição da Interface
interface Pessoa {
  id: number;
  nome: string;
  telefone: string;
}
let pessoas: Pessoa[] = [];
let nextId: number = 1;

const form = document.getElementById("cadastro-form") as HTMLFormElement;
const nomeInput = document.getElementById("nome") as HTMLInputElement;
const telefoneInput = document.getElementById("telefone") as HTMLInputElement;
const listaPessoasBody = document.querySelector(
  "#lista-pessoas tbody"
) as HTMLTableSectionElement;

function adicionarPessoa(nome: string, telefone: string): void {
  const novaPessoa: Pessoa = {
    id: nextId++,
    nome: nome,
    telefone: telefone,
  };

  pessoas.push(novaPessoa);
  renderizarLista();
}

function removerPessoa(id: number): void {
  pessoas = pessoas.filter((p) => p.id !== id);
  renderizarLista();
}

function renderizarLista(): void {
  listaPessoasBody.innerHTML = "";

  pessoas.forEach((pessoa) => {
    const row = listaPessoasBody.insertRow();

    row.insertCell().textContent = pessoa.nome;

    row.insertCell().textContent = pessoa.telefone;

    const acoesCell = row.insertCell();
    const removerBtn = document.createElement("button");
    removerBtn.textContent = "Remover";
    removerBtn.classList.add("remover-btn");
    removerBtn.onclick = () => removerPessoa(pessoa.id);

    acoesCell.appendChild(removerBtn);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = nomeInput.value.trim();
  const telefone = telefoneInput.value.trim();

  if (nome && telefone) {
    adicionarPessoa(nome, telefone);
    nomeInput.value = "";
    telefoneInput.value = "";
    nomeInput.focus();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});

renderizarLista();
