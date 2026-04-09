let xp = 0;

function addXP() {
  xp += 10;
  atualizarTela("✨ Você ganhou experiência!");
}

function removeXP() {
  xp -= 5;
  atualizarTela("⚠️ Você perdeu experiência!");
}

function atualizarTela(msg) {
  document.getElementById("xp").innerText = xp;
  document.getElementById("mensagem").innerText = msg;
}