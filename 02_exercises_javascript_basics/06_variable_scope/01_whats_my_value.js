// What will the following code log to the console and why? Don't run it until you have tried to answer.

console.log(greeting);

var greeting = 'Hello world!';

/*

This code should print undefined because the use of the var keyword on the second line of code means that the variable declaration gets hoisted to the top level of the scope, meaning that the var greeting declaration (not initialization) will occur before the method call on the first line of code. At that point the greeting variable will be given the default value of undefined and so that is what is printed. The variable initialization will not take place until after the console.log() method invocation because that is the position in which the initialization occurs in the code. Had the console.log() been called after the declaration and initialization, then the value of greeting would be printed to the console.

*/
