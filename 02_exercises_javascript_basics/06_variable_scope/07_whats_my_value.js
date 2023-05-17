// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();

/*

This code should print the value: 1 to the console. On the first line of code a variable is declared with the let keyword and initialized to the value: 1. This variable is globally scoped because it is declared outside of the confines of any block, which means it is available for use in the inner scope of any block that does not otherwise stop it by other means.

On the second line of code a function is declared with the name: myFunction. Inside the function block the console.log() method is invoked to print the value referenced by a variable named: a.

On the last line of code the function previously declared is invoked and the value of: a is output to the console. Because the variable on the first line of code is globally scoped and is accessible by a function inner scope and because the function does not otherwise block the accessibility the console.log() invocation prints the value of the variable referenced as the argument: 1.

*/