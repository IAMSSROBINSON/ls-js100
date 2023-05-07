// Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

// $ node multiply.js
// Enter the first number: 3.141592653589793
// Enter the second number: 2.718281828459045
// 3.141592653589793 * 2.718281828459045 = 8.539734222673566

function multiply (number1, number2) {
  return number1 * number2;
}

function prompt (message) {
  let READLINE_SYNC = require('readline-sync');
  return parseFloat(READLINE_SYNC.question(`==> ${message}`));
}

let number1 = prompt(`Enter first number: \n`);
let number2 = prompt(`Enter second number: \n`);

console.log(`${number1} * ${number2} = ${number1 * number2}`);