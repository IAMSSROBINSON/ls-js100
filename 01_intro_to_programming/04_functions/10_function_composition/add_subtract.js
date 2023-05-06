function add (a, b) {
  return a + b; // expression performs arithmetic operation and returns result
}

function subtract (a, b) {
  return a - b; // expression performs arithmetic operation and returns result
}

let sum = add(20, 45);
console.log(sum) // 65

let difference = subtract(80, 10);
console.log(difference) // 70


// FUNCTION COMPOSITION
console.log(add(20, 45));
console.log(subtract(80, 10));

/*

The function invocations on lines 17 and 18 are supplied as arguments to the console.log() method so that the return values are output to the console.


*/