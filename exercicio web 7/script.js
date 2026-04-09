function trocarTema() {
  document.body.classList.toggle("tema-claro");

  const botao = document.getElementById("botaoTema");

  if (document.body.classList.contains("tema-claro")) {
    botao.innerText = "☀️ Modo Claro";
  } else {
    botao.innerText = "🌙 Modo Escuro";
  }
}