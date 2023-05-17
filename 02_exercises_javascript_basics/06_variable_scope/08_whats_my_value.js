// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

/*

This code should print: 2. On the final line of code the value of the variable referenced by: b (2) is passed to the function: myFunction upon its invocation.

The function declared on the second line of code receives a copy of this value(2) and this value is assigned to the locally scoped parameter variable named: a. Because: a has the same name as the outer scoped variable it shadows it and blocks any access to the outer scoped variable with the same name and only ever references the value that was passed in and received through the locally scoped parameter.

Inside the function block the value of a(2) is thus output to the console by the console.log method invocation 


*/