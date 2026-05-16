const video = document.getElementById("camera-preview");
const btnGaleria = document.getElementById("galeria");
const btnCapturar = document.getElementById("capturar");
const btnFlash = document.getElementById("flash");
const galeriaThumb = document.getElementById("galeria-thumb");
const cameraErro = document.getElementById("camera-erro");
const cameraErroDetalhe = cameraErro?.querySelector(".camera-erro-detalhe");

let mediaStream = null;
let flashLigado = false;
let ultimaUrlSelecao = null;
let previewEspelhada = false;

const definirEspelhamentoPreview = (track) => {
  const settings = track.getSettings();
  const label = (track.label || "").toLowerCase();
  const frontalPorNome =
    /front|user|face|facetime|selfie|infrared/i.test(label) &&
    !/back|rear|environment|traseira/i.test(label);

  previewEspelhada =
    settings.facingMode === "user" || (!settings.facingMode && frontalPorNome);

  video.classList.toggle("camera-preview-espelhada", previewEspelhada);
};

const pararCamera = () => {
  if (!mediaStream) return;
  for (const track of mediaStream.getTracks()) {
    track.stop();
  }
  mediaStream = null;
  previewEspelhada = false;
  if (video) {
    video.srcObject = null;
    video.classList.remove("camera-preview-espelhada");
  }
};

const mostrarErroCamera = (mensagem) => {
  if (!cameraErro) return;
  if (cameraErroDetalhe) {
    cameraErroDetalhe.textContent = mensagem || "";
  }
  cameraErro.hidden = false;
};

const esconderErroCamera = () => {
  if (cameraErro) {
    cameraErro.hidden = true;
  }
};

const obterTrackVideo = () => mediaStream?.getVideoTracks()[0] ?? null;

const iniciarCamera = async () => {
  esconderErroCamera();
  pararCamera();

  if (!navigator.mediaDevices?.getUserMedia) {
    mostrarErroCamera("Este navegador não suporta acesso à câmera.");
    return;
  }

  const tentativas = [
    { video: { facingMode: { ideal: "environment" } }, audio: false },
    { video: { facingMode: "user" }, audio: false },
    { video: true, audio: false },
  ];

  let ultimoErro = null;

  for (const constraints of tentativas) {
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
      video.srcObject = mediaStream;

      try {
        await video.play();
      } catch (playErr) {
        pararCamera();
        mostrarErroCamera(
          playErr?.message || "Não foi possível reproduzir o vídeo da câmera.",
        );
        return;
      }

      const trackVideo = mediaStream.getVideoTracks()[0];
      if (trackVideo) {
        definirEspelhamentoPreview(trackVideo);
      }

      return;
    } catch (err) {
      ultimoErro = err;
      pararCamera();
    }
  }

  mostrarErroCamera(
    ultimoErro?.message ||
      "Verifique as permissões do navegador e tente novamente.",
  );
};

const capturarFotoDaCamera = () => {
  if (!mediaStream || !video.videoWidth || !video.videoHeight) {
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  if (previewEspelhada) {
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
  }
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  canvas.toBlob(
    (blob) => {
      if (!blob) return;
      if (ultimaUrlSelecao?.startsWith("blob:")) {
        URL.revokeObjectURL(ultimaUrlSelecao);
      }
      ultimaUrlSelecao = URL.createObjectURL(blob);
      galeriaThumb.src = ultimaUrlSelecao;
      selecionarImagem(ultimaUrlSelecao);
    },
    "image/jpeg",
    0.92,
  );
};

btnGaleria.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (ultimaUrlSelecao?.startsWith("blob:")) {
      URL.revokeObjectURL(ultimaUrlSelecao);
    }

    ultimaUrlSelecao = URL.createObjectURL(file);
    galeriaThumb.src = ultimaUrlSelecao;
    selecionarImagem(ultimaUrlSelecao);
  });
  input.click();
});

btnCapturar.addEventListener("click", () => {
  capturarFotoDaCamera();
});

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

window.addEventListener("pagehide", pararCamera);

iniciarCamera();
