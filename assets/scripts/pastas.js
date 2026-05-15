const cores = [
  "#F53153",
  "#388CF9",
  "#AB36F0",
  "#F98838",
  "#44AF69",
  "#2B193D",
  "#2B193D",
  "#00F0B5",
];

const pastas = document.getElementById("pastas");

materias.forEach((materia, index) => {
  const pasta = document.createElement("a");
  pasta.href = `/assuntos.html?materia=${materia.nome}`;
  pasta.classList.add("pasta");
  pasta.style.backgroundColor = cores[index];

  pasta.innerHTML = `
        <div class="decoration">
        ${Array.from({ length: Math.min(materia.conteudos.length, 4) })
          .map(
            () => `
            <div class="preview">
                <span></span>
                <span></span>
                <span></span>
            </div>
            `,
          )
          .join("")}
        </div>
        <div class="content">
            <h2>${materia.nome}</h2>
            <span>${materia.conteudos.length}</span>
            <button><i class="fa-solid fa-ellipsis"></i></button>
        </div>
    `;

  pastas.appendChild(pasta);
});

pesquisar(".pasta", "pastas");
abrirModal("fab", "adicionar-pasta");
