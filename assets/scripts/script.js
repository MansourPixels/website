const materias = [
  {
    nome: "Português",
    conteudos: ["", ""],
  },
  {
    nome: "Matemática",
    conteudos: ["", "", "", "", "", "", "", ""],
  },
  {
    nome: "Inglês",
    conteudos: ["", "", ""],
  },
  {
    nome: "Geografia",
    conteudos: ["", "", "", "", "", ""],
  },
  {
    nome: "Sociologia",
    conteudos: ["", "", "", "", "", ""],
  },
  {
    nome: "História",
    conteudos: ["", "", "", "", "", ""],
  },
];

function abrirModal(botaoId, modalId) {
  const botao = document.getElementById(botaoId);
  const modal = document.getElementById(modalId);
  const botaoFechar = modal.querySelector("#fechar");

  botao.addEventListener("click", () => {
    modal.showModal();
  });

  botaoFechar.addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
}

function pesquisar(elementoId) {
  const pesquisa = document.getElementById("pesquisa");
  pesquisa.addEventListener("input", (e) => {
    const valor = e.target.value.toLowerCase();
    const pastas = document.querySelectorAll(elementoId);
  
    pastas.forEach((pasta) => {
      const nome = pasta.querySelector("h2").textContent.toLowerCase();
      pasta.style.display = nome.includes(valor) ? "block" : "none";
    });
  });
}
