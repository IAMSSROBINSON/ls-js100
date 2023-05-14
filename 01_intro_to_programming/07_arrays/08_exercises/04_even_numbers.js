// Let's try another variation on the even-numbers theme.

// We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new array that contains one element for each element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array should contain 'odd'.

// Example

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
// Expected Output

// [
//   'odd', 'odd', 'even', 'odd',
//   'even', 'even', 'even', 'odd',
//   'odd', 'even', 'even',
// ]
// If you have trouble using map to accomplish this, try it using a regular for loop instead.

let newArray = myArray.map((number)=>{
  return number % 2 === 0 ? "even" : "odd";
})
console.log(newArray);

/*

A new variable is declared and initialized to the return value of the .map() method invocation on the caller array.

The .map() method accepts a callback function as an argument and invokes the callback function on each element in the caller array. On each invocation the callback function initializes a local variable to the value of the current element in the array.

Inside the body of the callback function a ternary operator is used to evaluate the returned expression. If the current number when divided by 2 has no remainder then return the primitive string value 'even' to the callback function for storing in the returned array, if there is a remainder then return the primitive string value 'odd'.

Once all elements in the calling array have been iterated over the .map() method returns an array with the string values in sequence of execution as elements. A pointer to the array is initialized as the value stored in the variable declare globally as let newArray.

The console.log method is then invoked and a reference to the array / the variable name is passed as an argument to the method to print the value to the output stream / console / terminal.

*/