let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2];
let saveFilter = array.filter((number)=>{
  return number % 2 === 0;
})

console.log(saveFilter);
// [ 2, 4, 6, 8, 10, 2 ]

let numbersGreaterThanFour = array.filter(number => number > 4);
console.log(numbersGreaterThanFour);
// [5, 6, 8, 9, 10]
