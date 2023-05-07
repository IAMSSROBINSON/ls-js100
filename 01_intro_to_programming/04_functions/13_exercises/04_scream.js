// What does the following code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

/*

This will not log anything to the console.

On line 9 a function in invoked and a primitive string value is passed from the outer scope into the inner scope as an argument.

The function initializes the value of the argument to the locally declared parameter variable on line 3.

On line 4 the variable value is reassigned however on lie 5 where the return statement exists, nothing is returned. A function destroys all values within a function once a return statement evaluates and returns its value so on line 6 the presence of a console.log method is lost and is not recognized by the function as doing anything.

Functions do implicitly return undefined if no explicit value is returned however no console.log statement exists outside of the function to output anything to the console and thus nothing will happen when this program runs.


*/