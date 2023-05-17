// Split the string alphabet into an array of characters.

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

// split the string between each UTF-16 code unit:
// .split() returns an array, it iterates on each character in a string
console.log(alphabet.split(''));

// console.log(Array.from(alphabet));