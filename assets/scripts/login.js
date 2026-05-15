const form = document.getElementById("login-form");
const senhaInput = document.getElementById("senha");
const toggleSenha = document.querySelector(".login-toggle-senha");
const toggleIcon = toggleSenha?.querySelector("i");

toggleSenha?.addEventListener("click", () => {
  const eSenha = senhaInput.type === "password";
  senhaInput.type = eSenha ? "text" : "password";

  if (toggleIcon) {
    toggleIcon.classList.toggle("fa-eye", !eSenha);
    toggleIcon.classList.toggle("fa-eye-slash", eSenha);
  }
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!REGEX_EMAIL.test(email) || !email.trim()) {
    return alert("Você inseriu um e-mail inválido.");
  }

  if (senha.length < 8) {
    return alert("A senha deve ter pelo menos 8 caracteres.");
  }

  window.location.href = "../pastas.html";
});
