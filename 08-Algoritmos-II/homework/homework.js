'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

    if(array.length<1){
      return[];
    }

    var left=[];
    var right=[];
    var pivot=array[0];

    for(var i=1;i<array.length;i++){
      if (array[i]<pivot){
        //si es menor que el pivot va a la izquierda
        left.push(array[i]);
      }else{
        //si es mayor o igual va a la derecha
        right.push(array[i]);
      }
    }
    //se concatena la izquierda ordenada recursiva con el pivot y la derecha ordenada recursiva ys e retorna
    return [].concat(quickSort(left), pivot, quickSort(right));

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length===1) {
    // caso base si el array tiene longitud 1
    return array;
  }

  let mid = Math.floor(array.length/2);
  //se divide el array en 2 mitades y se aplica recursividad a estos para que hagan lo mismo
  let left= mergeSort(array.slice(0, mid));
  let right= mergeSort(array.slice(mid));

  //funcion que ordena al final los arrays
  function merge(left, right){
    let result=[];
    //mientras los 2 array tengan elementos compara su primer elemento y el menor va al nuevo array
    while (left.length>0 && right.length>0){
      if(left[0]>right[0]){
        result.push(right[0]);
        right.shift();
      }else{
        result.push(left[0]);
        left.shift();
      }
    }
    //una vez que alguno de los 2 arrays queda vacio se concatena el resultado con el que quede con elementos y se retorna
    if (left.length<1){
      return [].concat(result, right);
    }else{
      return [].concat(result, left);
    }
  }
  //se llama a la funcion de ordenamiento
  return merge(left, right);


}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
