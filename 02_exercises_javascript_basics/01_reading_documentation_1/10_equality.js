// In your JavaScript console, execute the following two lines of code to check whether their return values differ and if so, how. Take a look at the MDN documentation on equality comparisons to read about how == and === differ.


'8' == 8; // true
'8' === 8; // false

/*

== Loose Equality Operator
Compares the values of both operands for equality and returns a boolean resulting value. Will attempt to coerce differing operands to the same type where possible. String - Number => Number - Number if numerical value.

=== Strict Equality Operator
Compares the value and the type of both operands. Both operands must be identical for strict equality operators to return true. no coercion occurs and operands are compared as is.

*/
