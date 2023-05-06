function addToArray (array) {
  return array.concat(10);
}
let oneToFive = [1, 2, 3, 4, 5];
console.log(addToArray(oneToFive));
console.log(oneToFive);

/*

.concat() methods returns a new array with the a copy of the original array + new element and does not mutate the caller, .concat() only mutates the copy array.

*/