const materia = new URLSearchParams(window.location.search).get("materia");

const assunto = document.getElementById("assunto");
assunto.textContent = materia;

const abrirPopupAcoes = (assunto) => {
  const popupInternoExistente = assunto.querySelector(".popup");

  if (popupInternoExistente) {
    popupInternoExistente.remove();
    return;
  }

  const popupExternoExistente = document.querySelector(".popup");
  if (popupExternoExistente) {
    popupExternoExistente.remove();
  }

  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
    <ul>
        <li>
            <a href="/ia/flash-cards.html">
                <i class="fa-solid fa-bolt" style="color: #00a676"></i>
                Flash Cards
            </a>
        </li>
        <li>
            <a href="/ia/resumo.html">
                <i class="fa-solid fa-file-lines" style="color: #6f2dbd"></i>
                Resumo
            </a>
        </li>
        <li>
            <a href="/ia/simulado-prova.html">
                <i class="fa-solid fa-clipboard-check" style="color: #ee8434"></i>
                Simulado de prova
            </a>
        </li>
        <hr />
        <li>
            <button id="renomear-assunto">
                <i class="fa-solid fa-pencil" style="color: #001837"></i>
                Renomear assunto
            </button>
        </li>
        <li>
            <button style="color: #ff383c" id="excluir-assunto">
                <i class="fa-solid fa-trash"></i>
                Excluir assunto
            </button>
        </li>
    </ul>
    `;
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.remove();
    }
  });

  assunto.appendChild(popup);
  assunto.scrollIntoView({ behavior: "smooth" });
  document.addEventListener("click", (event) => {
    if (!popup.contains(event.target) && !event.target.closest("button")) {
      popup.remove();
    }
  });
};

const assuntos = document.getElementById("assuntos");
materias
  .find(({ nome }) => nome === materia).conteudos
  .sort((a, b) => new Date(b.ultimaAtualizacao) - new Date(a.ultimaAtualizacao))
  .forEach((conteudo) => {
    const assunto = document.createElement("article");
    assunto.classList.add("assunto");

    const botaoAcoes = document.createElement("button");
    botaoAcoes.type = "button";
    botaoAcoes.id = "acoes-assunto";
    botaoAcoes.innerHTML = `<i class="fa-solid fa-ellipsis"></i>`;
    botaoAcoes.addEventListener("click", () => abrirPopupAcoes(assunto));

    const data = formatarDataRelativa(conteudo.ultimaAtualizacao);
    assunto.innerHTML = `
        <a href="/conteudo.html?materia=${materia}&conteudo=${conteudo.id}" class="conteudo-assunto">
            <h2>${conteudo.nome}</h2>
            <div class="imagens">
              ${conteudo.imagens?.map((imagem) => `<img src="${imagem}" alt="" />`).join("")}
            </div>
            <span>${data}</span>
        </a>
    `;

    assunto.appendChild(botaoAcoes);
    assuntos.appendChild(assunto);
  });

abrirModal("fab", "adicionar-assunto");
pesquisar(".assunto", "assuntos");
