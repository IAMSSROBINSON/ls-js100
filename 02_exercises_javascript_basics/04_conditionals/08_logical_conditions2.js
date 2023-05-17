// Predict the output of the following code:

if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

/*

This code should output to the console: No...
The reason is because the logical AND operator is used to evaluate the conditional expression. The operator states that in order to evaluate to true both operands must evaluate to be truthy and in this occasion the right operand of false evaluates to a falsy value thus returning false to the condition meaning that the else block clause is executed and not the first block.

*/