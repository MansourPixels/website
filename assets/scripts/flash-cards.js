/** Mesmas 10 perguntas do simulado (`simulado-prova.js`), com resposta em texto para o verso. */
const cartoes = [
  {
    pergunta: "Qual é a forma geral de uma equação do terceiro grau?",
    resposta:
      "ax³ + bx² + cx + d = 0, onde a, b, c e d são números reais (ou complexos) e obrigatoriamente a≠0.",
  },
  {
    pergunta: "Qual é o resultado de 2⁵?",
    resposta: "32, pois 2⁵ = 2 × 2 × 2 × 2 × 2.",
  },
  {
    pergunta: "Em um triângulo retângulo, o teorema de Pitágoras relaciona:",
    resposta: "Os comprimentos dos três lados (a² + b² = c² na forma mais conhecida).",
  },
  {
    pergunta: "Qual é a raiz quadrada de 81?",
    resposta: "9, pois 9 × 9 = 81.",
  },
  {
    pergunta:
      "O que representa o coeficiente 'a' na função f(x) = ax + b (a ≠ 0)?",
    resposta: "A inclinação (taxa de variação) da reta.",
  },
  {
    pergunta: "Quantos lados tem um hexágono?",
    resposta: "6 lados.",
  },
  {
    pergunta: "Qual é o valor de π (pi) aproximado comumente usado em exercícios?",
    resposta: "Aproximadamente 3,14.",
  },
  {
    pergunta: "A soma dos ângulos internos de um triângulo é:",
    resposta: "180°.",
  },
  {
    pergunta: "Qual destas expressões é um monômio?",
    resposta: "3x² — um monômio tem um único termo algébrico.",
  },
  {
    pergunta: "O número 0,25 em fração irredutível é:",
    resposta: "1/4.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const cardFlip = document.querySelector(".flip-card");
  const secaoReview = document.querySelector("#review-section");
  const btnRevelar = document.querySelector("#btn-reveal-answer");
  const botoesNiveis = secaoReview
    ? secaoReview.querySelectorAll(".review-actions__level")
    : [];
  const progressEl = document.getElementById("progresso-flash-cards");
  const indiceEl = document.getElementById("indice-pergunta-flash");

  if (!cardFlip || !secaoReview || !btnRevelar) return;

  let indiceAtual = 0;

  function atualizarProgresso() {
    const total = cartoes.length;
    const pct = ((indiceAtual + 1) / total) * 100;
    const textoIndice = `Pergunta ${String(indiceAtual + 1).padStart(2, "0")} de ${String(total).padStart(2, "0")}`;

    if (progressEl) progressEl.value = pct;
    if (indiceEl) indiceEl.textContent = textoIndice;
  }

  function renderCartao() {
    cardFlip.classList.remove("is-flipped");
    secaoReview.classList.remove("is-revealed");
    secaoReview.dataset.selectedLevel = "";
    botoesNiveis.forEach((b) => b.classList.remove("is-selected"));

    const c = cartoes[indiceAtual];
    document.querySelectorAll(".flash-card__titulo").forEach((el) => {
      el.textContent = c.pergunta;
    });

    const respostaEl = document.querySelector(".card-section-back .flash-card__resposta");
    if (respostaEl) respostaEl.textContent = c.resposta;

    const textoNumeracao = `Pergunta ${String(indiceAtual + 1).padStart(2, "0")} de ${String(cartoes.length).padStart(2, "0")}`;
    document.querySelectorAll(".flash-card__numeracao").forEach((el) => {
      el.textContent = textoNumeracao;
    });

    atualizarProgresso();
  }

  const syncRevealedUi = () => {
    const revealed = cardFlip.classList.contains("is-flipped");
    secaoReview.classList.toggle("is-revealed", revealed);
  };

  btnRevelar.addEventListener("click", () => {
    if (cardFlip.classList.contains("is-flipped")) return;
    cardFlip.classList.add("is-flipped");
    syncRevealedUi();
  });

  botoesNiveis.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!cardFlip.classList.contains("is-flipped")) return;

      botoesNiveis.forEach((b) => b.classList.remove("is-selected"));
      btn.classList.add("is-selected");
      secaoReview.dataset.selectedLevel = btn.dataset.level ?? "";

      if (indiceAtual < cartoes.length - 1) {
        indiceAtual++;
        renderCartao();
      } else {
        alert(`Você concluiu todos os ${cartoes.length} flash cards!`);
        window.location.href = "../conteudo.html";
      }
    });
  });

  renderCartao();
});
