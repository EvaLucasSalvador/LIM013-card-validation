import validator from './validator.js';
function ActivarSegundaVentana(){
  /*Adquirimos la informacion del DOM */
  let index = document.getElementById('seccionIndex');
  const creditCardNumber = document.getElementById('NumberCard');

  let NumberCifrado = document.getElementById('CreditCardCifrado');
  let MensajeFinal = document.getElementById('Mensaje');
  let Titulo2 = document.getElementById('Validez');

  let Segunda = document.getElementById('SegundaVentana');
  let boton2 = document.getElementById('Boton2');
  /*Ocultamos la seccion index*/
  index.style.display = 'none';
  Segunda.style.display='';

  
  /*Colocando el mensaje final*/

  /*Validando que los valores de la tarjeta de credito sean numeros*/
  let cont = 0;
  for (let i = 0; i < (creditCardNumber.value).length; i++){
      for (let j = 0; j<10 ; j++){
        if ( creditCardNumber.value[i]==j.toString() ){
            cont = cont+1;
        }
      }
  }

  if ( cont == (creditCardNumber.value).length ){
      let EstadoDelNumeroDeTarjeta=validator.isValid(creditCardNumber.value);
      if (EstadoDelNumeroDeTarjeta){
        if (creditCardNumber.value.length==0){
          NumberCifrado.style.display = 'none';
          MensajeFinal.textContent='Usted no ha ingresado el numero de tarjeta , hagalo para poder validar su compra';
        }else{
          boton2.style.display = 'none';
          Titulo2.textContent='! TARJETA VALIDA ¡ :)';
          MensajeFinal.textContent='El numero de tarjeta es valido';
          NumberCifrado.style.display = '';
          NumberCifrado.textContent = "Numero de tarjeta ingresado: "+validator.maskify(creditCardNumber.value);
        }

      }
      else{
        Titulo2.textContent='! TARJETA INVALIDA ¡ :(';
        MensajeFinal.textContent='El numero de tarjeta es correcto pero no es valido ,por que no cumple el algoritmo de Luhn' ;
        NumberCifrado.textContent = "Numero de tarjeta ingresado: "+validator.maskify(creditCardNumber.value);
      }
  }
  else{
      NumberCifrado.style.display = 'none';
      Titulo2.textContent='! TARJETA INVALIDA ¡ :(';
      MensajeFinal.textContent='Se tiene  ' +cont.toString()+ '/'+((creditCardNumber.value).length).toString() + ' digitos validos , no se permite ingresar caracteres distintos de numeros';
  }

  

}


let boton = document.getElementById('boton');
boton.onclick = ActivarSegundaVentana;


let boton1 = document.getElementById("Boton_regreso");
boton1.onclick = Regreso;
function Regreso(){
  let index = document.getElementById('seccionIndex');
  let Segunda = document.getElementById('SegundaVentana');
  Segunda.style.display='none';
  index.style.display = '';
}