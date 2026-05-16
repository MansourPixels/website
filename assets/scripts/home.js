const btnGaleria = document.getElementById("galeria");
const btnCapturar = document.getElementById("capturar");
const btnFlash = document.getElementById("flash");

let flashLigado = false;

btnGaleria.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = (event) => {
    const file = event.target.files[0];
    selecionarImagem(URL.createObjectURL(file));
  };
  input.click();
});

btnCapturar.addEventListener("click", () => {});

btnFlash.addEventListener("click", () => {
  flashLigado = !flashLigado;

  if (flashLigado) {
    btnFlash.style.backgroundColor = "#e3ca4659";
    alert("Flash ligado");
  } else {
    btnFlash.style.backgroundColor = "#00000059";
    alert("Flash desligado");
  }
});

const selecionarImagem = (imageUrl) => {
  const secaoImagem = document.getElementById("selecao-imagem");

  secaoImagem.style.display = "flex";
  secaoImagem.style.backgroundImage = `url(${imageUrl})`;
};
