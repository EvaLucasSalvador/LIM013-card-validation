const validator ={
  maskify:function(creditCardNumber) {
    if ( creditCardNumber.length > 5 ){
      let CreditCardCifrado="#".repeat(creditCardNumber.length-4)+creditCardNumber.slice(creditCardNumber.length-4,creditCardNumber.length);
      return CreditCardCifrado;

    }
    else{
      let CreditCardCifrado = creditCardNumber;
      return CreditCardCifrado;
    }
  
  },
  
  isValid:function(creditCardNumber) {
    let suma = 0;
    let ArrayCreditCard = [];
    let StrigModificado = '';
    for ( let i = 0 ; i < creditCardNumber.length ; i++ ){
      ArrayCreditCard[i]=parseInt(creditCardNumber[i]);
    }

    let ArrayCreditCardRever = ArrayCreditCard.reverse();
    for ( let i = 0 ; i < creditCardNumber.length ; i++ ){
      if ( i % 2 != 0 ){
        let Digito= ArrayCreditCardRever[i]*2 ;
        if ( Digito > 9){
          let NewDigito = ArrayCreditCardRever[i]*2-9;
          StrigModificado =StrigModificado + NewDigito.toString();
          suma = suma + NewDigito;
        }else{
          let NewDigito = ArrayCreditCardRever[i]*2;
          StrigModificado =StrigModificado +NewDigito.toString();
          suma = suma + NewDigito;
        }
      }
      else{
        StrigModificado =StrigModificado + ArrayCreditCardRever[i].toString()
        suma = suma + ArrayCreditCardRever[i];
      }
    }
    console.log("Numero de tarjeta : \n"+creditCardNumber);
    console.log("Numero de tarjeta con modificacion luhn : \n"+StrigModificado);
    console.log("Suma de digitos luego de la modicacion de luhn: \n"+suma.toString());
    return suma%10 == 0 ;
  },

}

//module.exports = validator;
export default validator;