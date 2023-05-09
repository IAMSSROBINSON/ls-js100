console.log(3 && "foo"); 

/*

The Logical && operator is used so both operands need to evaluate to be truthy for the expression to return true. This means both operands must be evaluated.

The last value evaluated is the string value and thus this is what is returned as the expression value. If using this is a conditional expression context this would evaluate to be true because both operands are truthy.

*/

console.log("foo" && 3); // 3

console.log(0 && "foo"); // foo

console.log("foo" && 0); // 0

console.log(3 || "foo"); // 3

console.log("foo" || 3); // foo

console.log(0 || "foo") // foo

console.log("foo" || 0) // foo

console.log("" || 0) // 0