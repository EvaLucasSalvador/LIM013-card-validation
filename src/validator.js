function maskify() {
  var val = document.getElementById('nombre4');
  var x= val.value;
  var frase = document.getElementById('nombre5');

  if ( x.length > 5 ){
    frase.style.display = '';
    frase.textContent = "#".repeat(x.length-4)+x.slice(x.length-4,x.length);
  }
  else{
    frase.style.display = '';
    frase.textContent = x;
  }

}

function isValid() {
  var n = document.getElementById('nombre4').value;
  if ( n.length =! 16 ){
    alert('El numero de tarjeta es invalido deben ser 16 digitos')
    return;
  }
  else{
    /*Validando que los valores de la tarjeta de credito sean numeros*/
    var x = 0;
     for (var i = 0; i < 16; i++){
      for (var j = 0; j<10; j++){
          if ( n[i]==j.toString() ){
              x = x+1;
          }
      }
    }
    
    if (x!=16){alert('El numero de tarjeta solo puede ser numeros ')}
    else {
       /* pasando String a Array entero*/
      var array = [];
      for (var i = 0; i < 16; i++){ 
      array[i]=parseInt(n[i]);}

      console.log(array)
      console.log('Numero de tarjeta : ' + n)
      console.log('El numero de tarjeta tiene ' + x.toString()+' digitos')
      /*Algoritmo de Lunh*/
      var suma = 0 ;
      for (var i = 0; i < 16; i++){
          if (i%2==0){
              if ( array[i]*2 > 9 ){
                  array[i]=array[i]*2-9;
              }
                else{
                array[i]=array[i]*2;
                }
          }
      suma = suma + array[i];
      }

      console.log(array);
      console.log("La suma de digitos es : ")
      console.log(suma);

      if(suma%10==0){alert('El numero de tarjeta es valida')}
      else{alert('El numero de tarjeta no cumple el algortimo de Luhm')}
    } 

  }
}