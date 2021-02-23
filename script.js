print = function () {

  document.getElementById("testo").innerHTML = "Scegli E-Campus";

}

print1 = function () {

  document.getElementById("testo1").innerHTML = "Forza Juveeeeeeeeeeeee";

}

print2 = function () {

  document.getElementById("testo").innerHTML = "";
}


let init = function () {

  $("#button1").on("click", print);
  $("#button2").on("click", print1);
  $("#testo").on("click", print2);
}

$(document).ready(init);