function bisiesto() {
  var nariz = document.getElementById("year");
  var boton = document.getElementById("boton");
  boton.addEventListener("click", (e) => {
    n = nariz.value;
    if ((n % 4 == 0 && n % 100 != 0) || n % 400 == 0) {
      console.log("Es bisiesto");
      document.getElementById("etiqueta").innerHTML = "Es bisiesto";
    } else {
      console.log("No es biciesto");
      document.getElementById("etiqueta").innerHTML = "No es biciesto";
    }
  });
}
bisiesto();
