let string = ['a', 'b', 'c'];
let storeReduce = string.reduce((accumulator, element)=>{
  return accumulator + " " + element;
}, "");

console.log(storeReduce); // abc