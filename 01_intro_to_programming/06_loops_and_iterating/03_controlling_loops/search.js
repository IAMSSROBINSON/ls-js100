// let array = [3, 1, 5, 9, 2, 6, 4, 7];
// let indexOfFive = -1;

// for (let index = 0; index < array.length; index ++) {
//   if (array[index] === 5) {
//     indexOfFive = 1;
//   }
// }
// console.log(indexOfFive);


let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = -1;

for (let index = 0; index < array.length; index ++) {
  if (array[index] === 5) {
    indexOfFive = 1;
    break; // this break statement save on CPU resources by stopping all executions after the conditional is met
  }
}
console.log(indexOfFive);