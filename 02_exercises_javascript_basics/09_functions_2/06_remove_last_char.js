// Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'

function removeLastChar (string) {
  return string.slice(0, string.length - 1);
}