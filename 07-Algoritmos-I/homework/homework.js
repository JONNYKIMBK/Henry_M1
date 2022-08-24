'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arr =[];
  var factor=2;
  var numero=num;

  function factoreo(arr, factor){
    if(numero === 1){
      arr.unshift(1);
    }
    
    if (numero%factor===0){
      arr.push(factor);
      numero=numero/factor;
      return factoreo(arr,factor);
    }
    if(numero%factor !==0 && numero>1){
      factor++;
      return factoreo(arr, factor);
    
    }
    
        
    return arr;

  }
  
  return factoreo(arr, factor);

}
  


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0;i<array.length;i++){
    for (let j=0;j<array.length-i-1;j++){
      if (array[j]>array[j+1]){
        let temp = array[j];
        array[j]=array[j+1];
        array[j+1]=temp;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let j=i-1;
    let aux=array[i];
    while (j>=0 && array[j]>aux) {
      array[j+1]=array[j];
      --j;
    }
    array[j+1]=aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let pos = 0;
    for (let j = i; j < array.length; j++) {
      if (array[j]<min){
        min= array[j];
        pos=j;
      }
    }
    if(min!==array[i]){
      array[pos]=array[i];
      array[i]=min;
    }
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
