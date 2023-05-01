// Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

// You are 20 years old.
// In 10 years, you will be 30 years old.
// In 20 years, you will be 40 years old.
// In 30 years, you will be 50 years old.
// In 40 years, you will be 60 years old.

let age = 20;
const TEN_INT = 10;
const TWENTY_INT = 20;
const THIRTY_INT = 30;
const FORTY_INT = 40;

console.log(`In ${TEN_INT} years, you will be ${age + TEN_INT} years old.`);
console.log(`In ${TWENTY_INT} years, you will be ${age + TWENTY_INT} years old.`);
console.log(`In ${THIRTY_INT} years, you will be ${age + THIRTY_INT} years old.`);
console.log(`In ${FORTY_INT} years, you will be ${age + FORTY_INT} years old.`);

/*

On line 8 the 'let' keyword is used as a block scoped identifier to declare a variable. It tells the JavaScript engine to allocate space in memory for a variable referenced with the name 'age'. The primitive integer / number value of 20 is instructed to be stored at the address referenced by the variable name by the '=' symbol which is used as a syntactic token during variable declaration.

On lines 10, 11, 12 and 13 the const keyword is used as to declare block scoped variables and give them an initializer value as is required by convention. These values are immutable and cannot change for as long as they are in use and they were given this keyword for that sole purpose. 

On line 15 the log method of the console object is invoked and an interpolated string is passed in as an argument. The string is interpolated because it is seen to use backticks `` with the inclusion of string literals and the ${} template literal symbols to whereby the 
expression value is inserted into the resulting string printed to the console / terminal window. 

The expression is anything that JavaScript can evaluate to a value that can be captured and used in the code and thus the value of the variables referenced is used to perform addition using the arithmetic + operator to add the values of both operand expressions for a final expression value. This shows that template literals have the ability to use expression values in a resulting string literal and also they operations can be performed within template literals to the same effect.

On lines 16, 17 and 18 these principles are repeated with adjustments to the expression to print differing results:

In 10 years, you will be 30 years old.
In 20 years, you will be 40 years old.
In 30 years, you will be 50 years old.
In 40 years, you will be 60 years old.

*/