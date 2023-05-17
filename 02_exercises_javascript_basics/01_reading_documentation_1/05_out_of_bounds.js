// What happens if we take the array ['fish', 'and', 'chips'] and try to access the element at index position 10? Try this in your JavaScript console.

/*

If we try to access index position 10 (an index that is greater than the last occupied index position), then JavaScript will will in all positions up to and including that position with an undefined value and treat the elements as missing.

*/

let array = ['fish', 'and', 'chips'];
console.log(array[10]);


for (let index in array) {
  console.log(array[index]);
}