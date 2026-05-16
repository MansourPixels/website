document.addEventListener("DOMContentLoaded", () => {
  const cardFlip = document.querySelector(".flip-card");
  const secaoReview = document.querySelector("#review-section");
  const btnRevelar = document.querySelector("#btn-reveal-answer");
  const botoesNiveis = secaoReview
    ? secaoReview.querySelectorAll(".review-actions__level")
    : [];

  if (!cardFlip || !secaoReview || !btnRevelar) return;

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
      botoesNiveis.forEach((b) => b.classList.remove("is-selected"));
      btn.classList.add("is-selected");
      secaoReview.dataset.selectedLevel = btn.dataset.level ?? "";
    });
  });
});
