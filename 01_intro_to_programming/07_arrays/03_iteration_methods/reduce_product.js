let array = [2, 3, 5, 7];

let saveReduce = array.reduce((accumulator, element) =>{
  return accumulator * element;
}, 1);
console.log(saveReduce);
/*

1 * 2 = 2
2 * 3 = 6
6 * 5 = 30
30 * 7 = 210

*/

let storeReduce = array.reduce((accumulator, element) => accumulator * element, 1);
console.log(storeReduce);