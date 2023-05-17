// What will the following code log to the console and why? Don't run it until you have tried to answer.

console.log(greeting);

let greeting = 'Hello world!';

/*

This code should produce a ReferenceError because unlike var the let keyword does not hoist the variable declaration to the top scope. 

On the first line of code the console.log() method invocation attempts to output the value of the a variable greeting however it has yet to be declared and initialized to a value and thus its value cannot yet be available for printing to the output stream which produces an error.

*/