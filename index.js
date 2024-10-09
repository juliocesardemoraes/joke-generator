import jokes from "./jokes.js";

const jokeTag = document.getElementById("joke");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function gerarPiada() {
  const index = getRandomInt(jokes.length);

  jokeTag.textContent = jokes[index].piada;
  console.log(jokes[index]);
}

window.gerarPiada = gerarPiada;
