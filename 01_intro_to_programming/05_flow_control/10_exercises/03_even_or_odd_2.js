// Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.

function evenOrOdd (int) {

  if ((typeof int) !== 'number') { // Number.isInteger(int);
    console.log("Invalid number entry! Only whole numbers accepted.");
    return;
  } else if (int % 2 === 0) {
      console.log("even");
  } else {
    console.log("odd");
  }
}
evenOrOdd("String"); // Invalid number entry! Only whole numbers accepted.
evenOrOdd(42); // even
evenOrOdd("42"); // Invalid number entry! Only whole numbers accepted.
evenOrOdd(5); // odd
evenOrOdd("5"); // Invalid number entry! Only whole numbers accepted.