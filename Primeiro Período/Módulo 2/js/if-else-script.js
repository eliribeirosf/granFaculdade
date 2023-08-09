function calculoMedia() {
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);
  const n3 = Number(document.getElementById("n3").value);
  const n4 = Number(document.getElementById("n4").value);

  media = (n1 + n2 + n3 + n4) / 4;

  if (media >= 7) {
    document.getElementById("resultFinal").innerHTML =
      "Parabéns, você foi aprovado! :)";
  } else if (media < 5) {
    document.getElementById("resultFinal").innerHTML =
      "Que pena, você foi reprovado :(";
  } else {
    document.getElementById("resultFinal").innerHTML = "Recuperação!";
  }

  document.getElementById("result").innerHTML = "A média final é " + media;
}

function limparResultado() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("resultFinal").innerHTML = "";
}
