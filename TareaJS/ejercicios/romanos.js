//Numeros romanos

function romanos(){
	var text = document.getElementById("year");
	console.log(text);
	var button = document.getElementById("boton");
	button.addEventListener("click", (e)=>{
		var inputText = text.value;
		console.log(inputText);
		var label = document.getElementById("etiqueta").innerHTML = "El numero en romano es: " + romanize(inputText);;
	});
}

function romanize(num) {
	var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
	for ( i in lookup ) {
	  while ( num >= lookup[i] ) {
		roman += i;
		num -= lookup[i];
	  }
	}
	return roman;
  }
romanos()