const form = document.getElementById("esqueci-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  if (!REGEX_EMAIL.test(email) || !email.trim()) {
    return alert("Você inseriu um e-mail inválido.");
  }

  window.location.href = "../login.html";
});
