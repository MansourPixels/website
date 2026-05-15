const form = document.getElementById("cadastro-form");

document.querySelectorAll(".login-toggle-senha").forEach((toggleSenha) => {
  toggleSenha.addEventListener("click", () => {
    const field = toggleSenha.closest(".login-field");
    const input = field?.querySelector("input");
    const icon = toggleSenha.querySelector("i");
    if (!input) return;

    const eSenha = input.type === "password";
    input.type = eSenha ? "text" : "password";

    if (icon) {
      icon.classList.toggle("fa-eye", !eSenha);
      icon.classList.toggle("fa-eye-slash", eSenha);
    }
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmar-senha").value;

  if (!REGEX_EMAIL.test(email) || !email.trim()) {
    return alert("Você inseriu um e-mail inválido.");
  }

  if (senha.length < 8) {
    return alert("A senha deve ter pelo menos 8 caracteres.");
  }

  if (confirmarSenha.length < 8) {
    return alert("A confirmação de senha deve ter pelo menos 8 caracteres.");
  }

  if (senha !== confirmarSenha) {
    return alert("As senhas não coincidem.");
  }

  if (!nome.trim().includes(" ") || nome.trim().length < 2) {
    return alert("Você deve inserir seu nome completo.");
  }

  window.location.href = "../login.html";
});
