function pangrama() {
  var wordInput = document.getElementById("textpangram");
  var boton = document.getElementById("boton");
  boton.addEventListener("click", (e) => {
    word = wordInput.value;
    console.log(word)
    const alfabeto = "a b c d e f g h i j k l m r n ñ o p q r s t u v w x y z";
    const alfabetoArray = alfabeto.split(" ");
    for (let i = 0; i < alfabetoArray.length; i++) {
      if (!word.includes(alfabetoArray[i])) {
        document.getElementById("etiqueta").innerHTML = "No es pangrama";
        break;
      }
      document.getElementById("etiqueta").innerHTML = "Es pangrama";
    }
  });
}
pangrama();
