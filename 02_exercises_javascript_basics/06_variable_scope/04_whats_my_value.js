// What will the following code log to the console and why? Don't run it until you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

/*

This code should print the value: 1 to the console. On the final line of code we invoke the function named: myFunction of which we have a function declaration for on the first line of code (denoted by use of the function keyword and the naming of a function) and within this function we declare a block scoped variable with the let keyword: 'a' and initialize the value: 1 to it. 

On the third line of code we define an if statement and we enter the nested scope because the if statement condition of: true is a truthy value and evaluates to being true in a boolean context. The the console.log() method invocation attempts to print the value of the variable name referenced / passed in as an argument and thus outputs the value: 1 to the output stream / console / terminal window because variables declared with let in an outer scope can be accessed by nest inner block scopes. 

*/