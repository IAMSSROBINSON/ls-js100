// Write a dynamic greeter program named greeter.js. The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:

// $ node greeter.js
// What is your name? Sue
// Hello, Sue!

const READLINE_SYNC = require('readline-sync');

let userName = READLINE_SYNC.question('Enter your name: \n');
console.log(`Hello ${userName}!`);

