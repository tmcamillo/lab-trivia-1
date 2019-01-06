var name = prompt("Olá! Insira seu nome para iniciarmos o jogo");
name = name.toUpperCase();

var publicarName = document.getElementsByClassName("name")[0];

publicarName.innerHTML = ("Olá, ") + name + (" Seja Bem Vindo(a)!");

function quizzMovies() {
  var question1 = prompt ("INDIQUE A OPÇÃO CORRETA \n\nQuem é o ator principal de Piratas do Caribe? \na) Johnny Depp \nb) Marcelo Adnet \nc) Elvis Presley")

  var question2 = prompt ("INDIQUE A OPÇÃO CORRETA \n\nQuem é o diretor de Titanic? \na) Tom Hanks \nb) James Cameron \nc) Walcir Carrasco")  

  var question3 = prompt ("INDIQUE A OPÇÃO CORRETA \n\nQuantos filmes tem a saga de Senhor dos Anéis? \na) 2  \nb) 3 \nc) 4")

  var right = 0;
  if (question1 == "a") right++;
  if (question2 == "b") right++;
  if (question3 == "b") right++;
  
  var wrong = 3 - right;

  document.getElementById("divResult").innerHTML = "Acertos: " + right + "<br>Erros: " + wrong;

  playAgain()
}
  
function quizzCountry() {
  var question1 = prompt ("INDIQUE A OPÇÃO CORRETA \n\nQual dos países não está na Europa? \na) EUA \nb) França \nc) Itália")

  var question2 = prompt ("INDIQUE A OPÇÃO CORRETA \n\nQual dos países não está na África? \na) Marrocos \nb) África do Sul \nc) Brasil")

  var question3 = prompt ("INDIQUE A OPÇÃO CORRETA \n\nQual dos países está na Oceania? \na) Japão Hank \nb) Nova Zelândia \nc) Árabia Saudita")
  
  var right = 0;
  if (question1 == "a") right++;
  if (question2 == "c") right++;
  if (question3 == "b") right++;
  
  var wrong = 3 - right;

  document.getElementById("divResult").innerHTML = "Acertos: " + right + "<br>Erros: " + wrong;

  playAgain()
}

function playAgain() {
  document.getElementById("playAgain").style.display = "block";
  document.getElementById("play").style.display = "none";
}

function play() {
  document.getElementById("play").style.display = "block";
  document.getElementById("playAgain").style.display = "none";
}
