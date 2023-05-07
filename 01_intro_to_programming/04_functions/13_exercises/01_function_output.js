// What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;

function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/*

This program should output to the console: 1

On the first line of code a variable is declared with global scope.
The first line of code within the function body declares a locally declared variable with scope confined to within the function. It has the same name as the globally declared variable and thus shadows / blocks access to the global variable within the function scope thereby only allowing availability of the locally declared variable within that function. 

On line 9 a function in invoked but has no bearing on the program operation. The function does not explicitly return any value, nor it is used in anyway.

On line 10 the console.log() method passes a variable name as its argument and only has access to the globally scoped variable from the first line of code and thus outputs its value to the console: 1.

*/