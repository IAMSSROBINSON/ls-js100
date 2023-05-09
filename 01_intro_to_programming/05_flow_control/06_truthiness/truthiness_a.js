let a = 5;
if (a) {
  console.log("How can this be true?"); // How can this be true?
} else {
  console.log("It's not true")
}

/*

The expression 'a' in the conditional statement of the `if` statement evaluates to true. The reason for this is because the variable a references the value 5 and 5 is a number that is a truthy value.

A value is truthy if it is not falsy and the falsy values are:

false
undefined
0
null
NaN
"" (empty string)

If an expression evaluates to be truthy then the first clause block of the if statement will execute, just as it does in this instance. 

*/