const { size } = require("@11ty/eleventy/src/TemplateCache");

function Queue() {

  this.data = Array.prototype.slice.call(arguments, 0);
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.size = size;

  function enqueue(value){
    this.data.push(value);
  }

  function dequeue (){
    return this.data.shift();
  }

  function size(){
    return this.data.length;
  }
}
var i;

i = new Queue();

console.log(i)
console.log(i.size())