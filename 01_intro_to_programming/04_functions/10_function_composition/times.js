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



function times (num1, num2) {
  return num1 * num2;
}

console.log(times(add(20, 45), subtract(80, 10))); // 4550

add(subtract(80, 10), times(subtract(20, 6), add(30, 5))) // 560