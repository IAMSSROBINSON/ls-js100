// What will the following code log to the console and why? Don't run it until you have tried to answer.

if (true) {
  let myValue = 20;
}

console.log(myValue);

/*

This code should produce a ReferenceError on the myValue variable on the final line of code because on that line the console.log() method invocation attempts to print the value of the myValue variable but it does not have access nor can it see any variable declared with that name.

The variable declaration and initialization on the second line of code is done so using the let keyword which means that referencing the variable is only possible within the confines of the block scope it was declared within (denoted by the curly braces) and thus its value cannot be printed in an outer scope.

*/