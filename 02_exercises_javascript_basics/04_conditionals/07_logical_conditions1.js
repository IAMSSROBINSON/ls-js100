// Predict the output of the following code:

if (false || true) {
  console.log('Yes!');
} else {
  console.log('No...');
}

/*

This code will output 'Yes!' to the console. 
The reason is because the logical or operator is used to evaluate the expression false || true. This condition evaluates to be true which is a truthy value and thus the first clause is executed. The reason why it evaluates to true is because given a falsy value OR a truthy value the conditional statement will return the last evaluated statement which in this case is the value true, which is truthy.

*/