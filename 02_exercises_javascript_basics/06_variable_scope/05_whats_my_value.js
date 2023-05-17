// What will the following code log to the console and why? Don't run it until you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);

    let a = 2;
    console.log(a);
  }
}

myFunction();

/*

This code should produce a ReferenceError and will not print anything to the console. A function is declared on the first line of code and is invoked on the last line of code.

Inside the function a blocked scoped variable is declared and initialized to the value of: 1. An if statement with a condition of true (which always evaluates to true in boolean context) allows entry into the if block of code. The first console.log method invocation attempts to print the value of a variable referenced as: a. After the first console.log() invocation a new let variable is declared and initialized with the value: 2. The let declaration is hoisted to the top of the if statement block scope prior to the first console.log invocation (but not the initialization). let declared variables are not given any value (not even undefined) and it is this value that the first console.log invocation is attempting to output to the console but cannot do so because the initialization does not take place until after the method invocation.

*/