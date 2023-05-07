// Using the code from Exercise 9, are the left and right variables on lines 1 and 2 the same as the left and right variables on lines 10-12? Explain your reasoning.

// CODE FROM EXERCISE 9:
function multiply(left, right) { // multiply, left, right
  let product = left * right; // product, left, right
  return product; // product
}

function getNumber(prompt) { // getNumber, prompt
  return parseFloat(question(prompt)); // parseFloat, question, prompt
}

let left = getNumber('Enter the first number: '); // left, getNumber
let right = getNumber('Enter the second number: '); // right, getNumber
console.log(`${left} * ${right} = ${multiply(left, right)}`); // console, left, right, multiply, left, right

/*

The left and right variables on the first line of code are local variables, they are not the same left and right variables (which are global variable) as declared on the 2 lines of code prior to the final line of code.

The reason is because the left and right variables on the first line of code are declared within the parameters of the functions scope, this means that they can only be accessed within the scope of the function block as defined by the curly braces. Variables declared within the scope of a function cannot be accessed in an outer scope and thus is any changed were made to the parameters value within the function it would not apply to the variables outside of the function scope.

The left and right variables declared towards the end of the program are global variables because they were not declared within a block or function scope - that is they are declare in the outer most scope of the program and thus are available throughout the entire program. The local variables on line 1 are initialized to the values of these variables because these are the variable references that get passed into the function. Because the variables have the same name the variables within the function shadow the global variable names and thus the values being worked on within the function are that of the locally declared parameter variables.

*/