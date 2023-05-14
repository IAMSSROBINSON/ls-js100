// Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.

// Example
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
 
// You can use Number.isInteger(value) to determine whether a numeric value is an integer. It returns true if the value is an integer, false otherwise.

function findIntegers (array) {
  return array.filter((element)=>{
    return Number.isInteger(element) === true;
  })
}

/*

On line 10 a function declaration is used to defined a function findIntegers.
On line 4 a global variable is declared and initialized to an array.
On line 5 a global variable is declared and initialized to the return value of invoking the function from line 10 and passing the variable from line 4 into the function as its argument.
On line 11 the .filter() method is invoked on the array object reference and a callback function is passed as an argument which itself is invoked on each element in the calling array initializing the value to a local variable and passing it as the argument in the parameter space.
On line 12 the Number.isInteger() method is invoked on the argument to check whether each argument value is indeed an integer value(positive number greater than 0). This method returns true if the argument is an integer so using this return value and the strict comparison operator with the boolean true as the right operand will evaluate to true if both left and right operands are truthy values thus returning that value to the callback function as per the conditions of the expression for .filer() which returns the value associated with the condition if truthy and pushes it to a new array.
Once all elements have been iterated on the filter method returns the new array with the truthy values as elements to the function which in turn return the function value to the caller on line 5 and prints the values on line 6 with the invocation of the console.log() method and the function return value stored in a variable passed in as it argument.

*/
