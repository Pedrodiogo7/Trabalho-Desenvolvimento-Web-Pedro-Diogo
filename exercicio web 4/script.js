function ativarModo() {
  document.body.classList.toggle("modo-jedi");

  const mensagem = document.getElementById("mensagem");

  if (mensagem.innerText === "") {
    mensagem.innerText = "✨ A Força está com você, jovem Padawan!";
  } else {
    mensagem.innerText = "";
  }
}
