// What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

/*

This program should output:

'Not Empty'

An empty array is passed into the function from line 11 into line 3. 
The conditional expression on line 4 evaluates the parameter value to be true because although the array is empty it is still an expression that evaluates to itself and thus an array, albeit empty, is a truthy value that evaluates to true. The first clause block therefore executes and the console.log method is invoked printing the string 'Not Empty' to the output stream.

*/