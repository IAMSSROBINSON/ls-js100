// Write a program that asks for two numbers from the user, adds the numbers together, then displays the result

const READLINE_SYNC = require('readline-sync');

let number1 = READLINE_SYNC.question("Enter first number: ");
let number2 = READLINE_SYNC.question("Enter second number: ");

let sum = number1 + number2;

console.log(`\n${number1} + ${number2} = ${Number(number1) + Number(number2)}\n`);