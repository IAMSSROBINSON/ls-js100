// Use reduce to compute the sum of the squares of all of the numbers in an array:

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
// Note that 83 is 3*3 + 5*5 + 7*7.

/*

Compute the sum: the total accumulated value
of the squares: number * number
of all the numbers in the array: of each int element in the array

e.g.

squares:
3: 3 * 3 = 9
5: 5 * 5 = 25
7: 7 * 7 = 49

sum of squares:
9 + 25 + 49 = 83

.reduce(): is a method that reduces an array to a single element
.reduce() accepts a callback function and an initializer accumulator value as its arguments
  the callback function accepts arguments: accumulator and currentElementFromArray

so the equation we want to iterate on is: accumulator += (element * element) and accumulator starts at 0(initializer)

*/

// function sumOfSquares (array) {
// return array.reduce(function (accumulator, element) {
//   return accumulator + (element * element);
// }, 0);
// }

function sumOfSquares (array) {
  return array.reduce((accumulator, element) => accumulator + (element * element), 0);
}