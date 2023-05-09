let b = 0;

if (b) {
  console.log("How can this be true?");
} else {
  console.log("It is not true"); // It is not true"
}

/*

The conditional expression 'b' on line 3 evaluates to 0. 0 is a falsy value that evaluates to be false and in JavaScript this means that the first clause execution block will not execute and will instead default to the else statement to be executed.

*/