// Without running the below code, determine what will be logged to the console.

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

/*

This will log to the console: $3.99
The reason is because the ternary operator is used to evaluate an expression of which the result is then saved to a variable.
The operand on the left has a value of true but also has the logical NOT operator prefixed to it which return the opposite of the result of the evaluation thereby returning false instead of true.
The operand on the far right is returned because the left most operand evaluates to a falsy value and this is the way of the ternary operator and thus 3.99 is assigned to the variable admissionPrice.
The console.log method is invoked and the value of the variable is passed in as an argument to print to the console.

*/