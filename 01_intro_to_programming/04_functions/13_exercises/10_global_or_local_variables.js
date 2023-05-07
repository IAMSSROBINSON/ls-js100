// Using the code from Exercise 9, classify each variable name as either global or local. For our purposes here, you may assume that the code from Exercise 9 is the entire program

// CODE FROM EXERCISE 9:
function multiply(left, right) { // multiply(GLOBAL), left(LOCAL), right(LOCAL)
  let product = left * right; // product(LOCAL), left(LOCAL), right(LOCAL)
  return product; // product(LOCAL)
}

function getNumber(prompt) { // getNumber(GLOBAL), prompt(LOCAL)
  return parseFloat(question(prompt)); // parseFloat(GLOBAL), question(GLOBAL), prompt(LOCAL)
}

let left = getNumber('Enter the first number: '); // left(GLOBAL), getNumber(GLOBAL)
let right = getNumber('Enter the second number: '); // right(GLOBAL), getNumber(GLOBAL)
console.log(`${left} * ${right} = ${multiply(left, right)}`); // console(GLOBAL), left(GLOBAL), right(GLOBAL), multiply(GLOBAL), left(GLOBAL), right(GLOBAL)