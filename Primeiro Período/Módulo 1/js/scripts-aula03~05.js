alert("Nessa arquivo englobei o conteúdo aprendido nas aulas 3, 4 e 5");

function Soma() {
  var num1 = parseFloat(document.getElementById("n1").value);
  var num2 = parseFloat(document.getElementById("n2").value);
  var soma = num1 + num2;
  document.getElementById("res").innerHTML = "Resultado: " + soma;
}

function acendeLampada() {
  document.getElementById("imagem").src = "img/pic_bulbon.gif";
}

function apagaLampada() {
  document.getElementById("imagem").src = "img/pic_bulboff.gif";
}
