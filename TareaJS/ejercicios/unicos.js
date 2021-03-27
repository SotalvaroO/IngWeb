function unico() {
  const entrada = document.getElementById("datos");
  const boton = document.getElementById("boton");
  boton.addEventListener("click", (e)=>{
      let datosEntrada = entrada.value;
      let datosSplit = datosEntrada.split(" ");
      console.log(datosSplit);
      unicos(datosSplit);
      let label = document.getElementById("etiqueta").innerHTML = "El arreglo queda: {" + datosSplit + "}";
  });
}
function unicos(x){
    let repetido = false;
    for (let i = 0; i < x.length ; i++){
        for (let j =0; j < x.length; j++){
            if(i>=0){
                if(i != j){
                    if(x[i]==x[j]){
                        repetido = true;
                    }
                } 
            }
            
        }
        if(repetido == false){
            x.splice(i,1);
            i = -1;
        }else{
            repetido= false;
        }
        
    }
    console.log(x);
}
unico();