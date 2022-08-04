'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
    let numString = num.toString();
    let numArr = numString.split("");
    let suma = 0;
    let j = 0;

    for(var i= (numArr.length -1); i>= 0; i--){
      let a = Math.pow(2, j) * parseInt(numArr[i], 10);
      suma=suma+a;
      j++;

    }

    return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  let arr = [];
  let i=0
  while (num>=1){
    arr[i]= num % 2;
    i++;
    num= Math.floor(num/2);
  }
  arr.reverse();
  let numString = arr.toString().replace(/,/g,"");
  //join("") en vez del toString().replace()
  
  return numString;

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}