// What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

/*

This code should print the object: 

{
  firstName: 'Jane',
  lastName: 'Doe'
}

On the first line of code the keyword const is used to declare a variable: a and initialize it to the value of an object. The object has two properties and a string value each to accompany them. This variable is globally scoped as it is declared in the outer most scope and outside the confines of any block scopes.

After this a function declaration occurs and is defined with the name: myFunction. Within the function block the object: a is accessed using dot notation to reassigned the property: firstName value to 'Jane'. This mutation of the object takes place when the function is invoked on the penultimate line of code with the function invocation.

The object property value reassignment is legal even though the object is referenced by the const variable: a. The object itself is not attempted to be reassigned (which would be against the rules) however the property value reassignment is fine.

Thus on the last line of code the console.log() method invocation prints the value of the variable referenced by: a.

It prints the object:

{
  firstName: 'Jane',
  lastName: 'Doe'
}

*/