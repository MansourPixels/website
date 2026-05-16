const questoes = [
  {
    texto: "Qual é a forma geral de uma equação do terceiro grau?",
    correta: "ax³ + bx² + cx + d = 0",
    erradas: ["ax² + bx + c = 0", "ax + b = 0", "a/x + b = 0"],
  },
  {
    texto: "Qual é o resultado de 2⁵?",
    correta: "32",
    erradas: ["16", "64", "10"],
  },
  {
    texto: "Em um triângulo retângulo, o teorema de Pitágoras relaciona:",
    correta: "Os comprimentos dos três lados",
    erradas: ["Apenas os ângulos", "Área e perímetro", "Apenas a hipotenusa"],
  },
  {
    texto: "Qual é a raiz quadrada de 81?",
    correta: "9",
    erradas: ["8", "7", "6"],
  },
  {
    texto:
      "O que representa o coeficiente 'a' na função f(x) = ax + b (a ≠ 0)?",
    correta: "A inclinação (taxa de variação) da reta",
    erradas: [
      "O ponto onde a reta cruza o eixo y",
      "A concavidade da parábola",
      "O período da função",
    ],
  },
  {
    texto: "Quantos lados tem um hexágono?",
    correta: "6",
    erradas: ["5", "7", "8"],
  },
  {
    texto: "Qual é o valor de π (pi) aproximado comumente usado em exercícios?",
    correta: "3,14",
    erradas: ["2,71", "1,41", "0,57"],
  },
  {
    texto: "A soma dos ângulos internos de um triângulo é:",
    correta: "180°",
    erradas: ["90°", "360°", "270°"],
  },
  {
    texto: "Qual destas expressões é um monômio?",
    correta: "3x²",
    erradas: ["x + 1", "x² - 4", "1/x + 2"],
  },
  {
    texto: "O número 0,25 em fração irredutível é:",
    correta: "1/4",
    erradas: ["1/2", "2/5", "1/5"],
  },
];

const LETRAS = ["A", "B", "C", "D"];

function embaralhar(itens) {
  const copia = [...itens];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

const form = document.getElementById("simulado");
const progressEl = document.getElementById("progresso-simulado");
const indiceEl = document.getElementById("indice-pergunta");
const tituloEl = document.getElementById("texto-pergunta");
const listaEl = document.getElementById("lista-alternativas");
const btn = document.getElementById("btn-proxima");
const btnLabel = btn.querySelector("span");

let indiceAtual = 0;
let acertos = 0;

function atualizarProgresso() {
  const total = questoes.length;
  const pct = ((indiceAtual + 1) / total) * 100;
  progressEl.value = pct;
  indiceEl.textContent = `Pergunta ${String(indiceAtual + 1).padStart(2, "0")} de ${String(total).padStart(2, "0")}`;
}

function renderPergunta() {
  const q = questoes[indiceAtual];
  tituloEl.textContent = q.texto;

  const alternativas = embaralhar([
    { texto: q.correta, correta: true },
    ...q.erradas.map((t) => ({ texto: t, correta: false })),
  ]);

  listaEl.innerHTML = alternativas
    .map(
      (alt, i) => `
      <li>
        <label>
          <strong>${LETRAS[i]}.</strong> ${alt.texto}
          <input type="radio" name="resposta" value="${LETRAS[i]}" data-correta="${alt.correta}" required>
        </label>
      </li>
    `,
    )
    .join("");

  atualizarProgresso();

  const ultima = indiceAtual === questoes.length - 1;
  btnLabel.textContent = ultima ? "Finalizar simulado" : "Próxima pergunta";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const selecionado = form.querySelector('input[name="resposta"]:checked');
  if (!selecionado) return;

  if (selecionado.dataset.correta === "true") {
    acertos++;
  }

  if (indiceAtual < questoes.length - 1) {
    indiceAtual++;
    renderPergunta();
  } else {
    alert(`Você finalizou o simulado e acertou ${acertos}/10 questões!`);
    window.location.href = "../conteudo.html";
  }
});

renderPergunta();
