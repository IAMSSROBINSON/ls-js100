// What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

/*

This code will not log anything to the console because there is no console.log statement and because the function on the last line of code when invoked attempts to reassign the value of the const defined variable on the first line of code. 

This alone will produce an TypeError because although the function has access to the outer scoped variable a const variable is immutable and cannot be reassigned, that is, their values cannot change or attempt to be changed. Therefore the attempt at reassignment inside the function block will cause the error and halt the program.

The final line of code - the function invocation passed the value that the variable: a references into the function but it is never received because no parameter is declared to receive it. This useless act has no bearing on the code as it stands.

*/