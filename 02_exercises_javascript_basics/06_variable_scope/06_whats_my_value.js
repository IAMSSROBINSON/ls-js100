// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

/*

This code should print false to the console.

On the first and second lines of code the let keyword is used to declare and initialize two variables with their respective values. These variables have global scope as they are declared outside of any block scope.

On the third line of code we define an if statement and the condition 'is the value of the variable 'a' greater than 4 is evaluated. This condition evaluates to true because the value of a is 5 and so the question becomes 'is 5 greater than 4'. Because the expression evaluates to true we are granted entry into the if block whereby a new variable is declared and initialized. This variable is block scoped and is confined to availability within the block only.

On the final line of code the console.log() method is invoked and the reference b is passed in as an argument. b references the value false from the second line of code as this is the only variable that it has access to in the wider scope.

*/