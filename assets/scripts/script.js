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

function pesquisar(elementoId, parentId) {
  const pesquisa = document.getElementById("pesquisa");
  pesquisa.addEventListener("input", (e) => {
    const valor = e.target.value.toLowerCase();
    const parent = document.getElementById(parentId);
    const itens = parent.querySelectorAll(elementoId);
    const imagemVazio = parent.querySelector(".vazio");

    const itensFiltrados = Array.from(itens).filter((pasta) => {
      const nome = pasta.querySelector("h2").textContent.toLowerCase();
      return nome.includes(valor);
    });

    itens.forEach((pasta) => {
      pasta.style.display = itensFiltrados.includes(pasta) ? "block" : "none";
    });

    if (itensFiltrados.length === 0 && !imagemVazio) {
      const imagemVazio = document.createElement("img");
      imagemVazio.src = "/assets/images/vazio.svg";
      imagemVazio.alt = "Nenhum item encontrado";
      imagemVazio.classList.add("vazio");
      parent.appendChild(imagemVazio);
    } else if (imagemVazio) {
      parent.removeChild(imagemVazio);
    }
  });
}

function formatarDataRelativa(date) {
  const inputDate = new Date(date);
  const now = new Date();

  const diffMs = inputDate - now;

  const seconds = Math.round(diffMs / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const months = Math.round(days / 30);
  const years = Math.round(days / 365);

  const rtf = new Intl.RelativeTimeFormat("pt-BR", {
    numeric: "auto",
  });

  if (Math.abs(seconds) < 60) {
    return rtf.format(seconds, "second");
  }

  if (Math.abs(minutes) < 60) {
    return rtf.format(minutes, "minute");
  }

  if (Math.abs(hours) < 24) {
    return rtf.format(hours, "hour");
  }

  if (Math.abs(days) < 30) {
    return rtf.format(days, "day");
  }

  if (Math.abs(months) < 12) {
    return rtf.format(months, "month");
  }

  return rtf.format(years, "year");
}

const gerarImagens = () =>
  Array.from({ length: 4 }).map(
    () => `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/200`,
  );

const materias = [
  {
    nome: "Português",
    conteudos: [
      {
        id: 0,
        nome: "Gramática",
        ultimaAtualizacao: "2026-05-14",
        imagens: gerarImagens(),
      },
      {
        id: 1,
        nome: "Redação",
        ultimaAtualizacao: "2026-05-13",
        imagens: gerarImagens(),
      },
    ],
  },
  {
    nome: "Matemática",
    conteudos: [
      {
        id: 2,
        nome: "Equação de segundo grau",
        ultimaAtualizacao: "2026-05-14",
        imagens: gerarImagens(),
      },
      {
        id: 3,
        nome: "Geometria analítica",
        ultimaAtualizacao: "2026-05-13",
        imagens: gerarImagens(),
      },
      {
        id: 4,
        nome: "Polinômios",
        ultimaAtualizacao: "2026-05-12",
        imagens: gerarImagens(),
      },
      {
        id: 5,
        nome: "Probabilidade e estatística",
        ultimaAtualizacao: "2026-05-11",
        imagens: gerarImagens(),
      },
      { id: 6, nome: "Análise combinatória", ultimaAtualizacao: "2026-05-10" },
      {
        id: 7,
        nome: "Trigonometria",
        ultimaAtualizacao: "2026-05-09",
        imagens: gerarImagens(),
      },
      {
        id: 8,
        nome: "Álgebra linear",
        ultimaAtualizacao: "2026-05-08",
        imagens: gerarImagens(),
      },
      {
        id: 9,
        nome: "Matemática financeira",
        ultimaAtualizacao: "2026-05-07",
        imagens: gerarImagens(),
      },
    ],
  },
  {
    nome: "Inglês",
    conteudos: [
      { id: 10, nome: "Verbo to be", ultimaAtualizacao: "2026-05-14" },
      {
        id: 11,
        nome: "Falsas cognatas",
        ultimaAtualizacao: "2026-05-13",
        imagens: gerarImagens(),
      },
      {
        id: 12,
        nome: "Expressões verbais",
        ultimaAtualizacao: "2026-05-12",
        imagens: gerarImagens(),
      },
    ],
  },
  {
    nome: "Geografia",
    conteudos: [
      {
        id: 13,
        nome: "Geopolítica",
        ultimaAtualizacao: "2026-05-14",
        imagens: gerarImagens(),
      },
      {
        id: 14,
        nome: "Cartografia",
        ultimaAtualizacao: "2026-05-13",
        imagens: gerarImagens(),
      },
      {
        id: 15,
        nome: "Geodinâmica",
        ultimaAtualizacao: "2026-05-12",
        imagens: gerarImagens(),
      },
      {
        id: 16,
        nome: "Climatologia",
        ultimaAtualizacao: "2026-05-11",
        imagens: gerarImagens(),
      },
      {
        id: 17,
        nome: "Globalização",
        ultimaAtualizacao: "2026-05-11",
        imagens: gerarImagens(),
      },
      {
        id: 18,
        nome: "Desenvolvimento sustentável",
        ultimaAtualizacao: "2026-05-10",
        imagens: gerarImagens(),
      },
    ],
  },
  {
    nome: "Sociologia",
    conteudos: [
      {
        id: 19,
        nome: "Karl Marx",
        ultimaAtualizacao: "2026-05-14",
        imagens: gerarImagens(),
      },
      {
        id: 20,
        nome: "Max Weber",
        ultimaAtualizacao: "2026-05-13",
        imagens: gerarImagens(),
      },
      {
        id: 21,
        nome: "Emile Durkheim",
        ultimaAtualizacao: "2026-05-12",
        imagens: gerarImagens(),
      },
      {
        id: 22,
        nome: "Georg Simmel",
        ultimaAtualizacao: "2026-05-11",
        imagens: gerarImagens(),
      },
      {
        id: 23,
        nome: "Herbert Spencer",
        ultimaAtualizacao: "2026-05-11",
        imagens: gerarImagens(),
      },
      {
        id: 24,
        nome: "Auguste Comte",
        ultimaAtualizacao: "2026-05-10",
        imagens: gerarImagens(),
      },
    ],
  },
  {
    nome: "História",
    conteudos: [
      {
        id: 25,
        nome: "Revolução Francesa",
        ultimaAtualizacao: "2026-05-14",
        imagens: gerarImagens(),
      },
      {
        id: 26,
        nome: "Antiguidade Clássica",
        ultimaAtualizacao: "2026-05-13",
        imagens: gerarImagens(),
      },
      {
        id: 27,
        nome: "Expansão Africana",
        ultimaAtualizacao: "2026-05-12",
        imagens: gerarImagens(),
      },
      {
        id: 28,
        nome: "Revolução Industrial",
        ultimaAtualizacao: "2026-05-11",
        imagens: gerarImagens(),
      },
      {
        id: 29,
        nome: "Guerra Fria",
        ultimaAtualizacao: "2026-05-11",
        imagens: gerarImagens(),
      },
      {
        id: 30,
        nome: "Guerra Civil",
        ultimaAtualizacao: "2026-05-10",
        imagens: gerarImagens(),
      },
    ],
  },
];
