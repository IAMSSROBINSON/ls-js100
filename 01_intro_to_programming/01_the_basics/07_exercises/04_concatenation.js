// Explain why this code logs '510' instead of 15.

console.log('5' + 10);

// A non-string operand used with a string operand and the + operator will always implicitly coerce the non-string into a string and thus the + operator concatenates the operands and does not perform an addition arithmetic operation. Therefore '5' + 10 becomes '5' + '10' = '510'.
