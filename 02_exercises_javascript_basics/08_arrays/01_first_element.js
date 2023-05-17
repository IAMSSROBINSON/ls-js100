// Write a function that returns the first element of an input array. For example:

console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'
console.log(first([])); // // undefined
// What would you return if the input array was empty?

function first (array) {
  return array[0];
}

/*

if the input array was empty then undefined would be returned as the function would be trying to access the absence of an element which has yet to be defined and is thus undefined.

*/