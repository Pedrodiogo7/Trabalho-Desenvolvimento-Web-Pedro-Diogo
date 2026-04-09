let pontuacao = 0;
let respondidas = 0;

function responder(correta, botao) {
  // evita responder a mesma pergunta mais de uma vez
  if (botao.parentElement.classList.contains("respondido")) return;

  if (correta) {
    pontuacao++;
    botao.classList.add("correta");
  } else {
    botao.classList.add("errada");
  }

  botao.parentElement.classList.add("respondido");
  respondidas++;
}

function mostrarResultado() {
  const resultado = document.getElementById("resultado");

  if (respondidas < 3) {
    resultado.innerText = "⚠️ Responda todas as perguntas!";
    return;
  }

  resultado.innerText = `🎯 Você acertou ${pontuacao} de 3 perguntas!`;
}