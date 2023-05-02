// Modify the greeter.js program to ask for the user's first and last names separately, then greet the user with their full name.

// $ node greeter.js
// What is your first name? Sue
// What is your last name? Roberts
// Hello, Sue Roberts!

const READLINE_SYNC = require('readline-sync');

let firstName = READLINE_SYNC.question("Enter your first name: \n");
let lastName = READLINE_SYNC.question("Enter your last name: \n");
console.log(`Hello, ${firstName} ${lastName}!`);