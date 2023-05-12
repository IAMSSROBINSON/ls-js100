// Modify the age.js program you wrote in the exercises for the Input/Output chapter. The updated code should use a for loop to display the future ages.

const READLINE_SYNC = require('readline-sync');
let userAge = READLINE_SYNC.question('Enter your age: \n');

userAge = Number(userAge);
console.log(`You are ${userAge} years old.`);

for (let index = 10; index <= 40; index += 10) {
  console.log(`In ${index} years, you will be ${userAge + index} years old.`);
} 
