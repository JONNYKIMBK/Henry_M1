"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/



function BinarySearchTree(data) {
  this.value = data;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size= function(){
  var size = 1;
  if (this.left){
    size+=1;
    this.left.size();
  }
  if (this.right){
    size+=1;
    this.right.size();
  }
  return size;
}

BinarySearchTree.prototype.insert= function(data){
    if (data<this.value){
      if(this.left===null){
        this.left= new BinarySearchTree(data);
      }else{
        this.left.insert(data);
      }
    }
    if (data>=this.value){
      if (this.right===null){
        this.right= new BinarySearchTree(data);
      }else{
        this.right.insert(data);
      }
    }
}

BinarySearchTree.prototype.contains= function(data){

  if (data===this.value){
    return true;
  }

  if (data >this.value){
  if (this.right === null){
    return false;
  }else{
    return this.right.contains(data);
  }
}
if (data <this.value){
  if (this.left === null){
    return false;
  }else{
    return this.left.contains(data);
  }}

  /*    if (this.value === data){
      return true;
    }
    if (data < this.value){
      if (this.left){
      if(this.left.value===data){
        return true;
      }else{
        return this.left.contains(data);
      }
      }
      if (this.right){
        if(this.right.value===data){
        return true;
        }else{
        return this.right.contains(data);
      }
      }
    }

      if (data > this.value){
          
          if (this.right){
            if(this.right.value===data){
              return true;
            }else{
              return this.right.contains(data);
            }
          }

          if (this.left){
              if(this.left.value===data){
                return true;
              }else{
                return this.left.contains(data);
              }
            }
          }
*/
    
}

BinarySearchTree.prototype.depthFirstForEach= function(cb, order = "in-order"){
    
    switch (order){
      case "in-order":{
        this.left?.depthFirstForEach(cb, order);
        cb(this.value);
        this.right?.depthFirstForEach(cb, order);

        break;
      }
      case "pre-order":{
        cb(this.value);
        this.left?.depthFirstForEach(cb, order);
        this.right?.depthFirstForEach(cb, order);
        break;
      }
      case "post-order":{
        this.left?.depthFirstForEach(cb, order);
        this.right?.depthFirstForEach(cb, order);
        cb(this.value);
        break;
      }
    }
}

BinarySearchTree.prototype.breadthFirstForEach= function(cb, queue = []){
    cb(this.value);
    if (this.left){
      queue.push(this.left);
    }
    if (this.right){
      queue.push(this.right);
    }
    if (queue.length){
      queue.shift().breadthFirstForEach(cb, queue);
    }

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
