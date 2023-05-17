// Determine what the following code snippet logs. First solve it in your head or on paper, and only then run it in your JavaScript console to check the result.

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

/*

This should log: true
The () has the highest precedence and thus this expression is evaluated first.
speed > 0 evaluates to false.
acceleration > 0 evaluates to true and thus true is returned to the && operator right side operand.
breakingForce < acceleration evaluates to true for the left hand operand of the && operator and thus the expression evaluates to true && true therefore this value is initialized to the variable declaration and is passed to the console.log method invocation and printed to the console.

*/

// Bonus question: Do we need the parentheses in the boolean expression or could we also have written the following?

// let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;

/*

In this instance it does not make a difference to the result of the code but it is good practice to use parenthesis when multiple expressions and sub-expressions need evaluating so that the result can be managed as best as possible and is clearer to read.

*/
