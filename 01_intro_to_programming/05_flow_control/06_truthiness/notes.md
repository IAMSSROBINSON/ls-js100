# Truthiness

Every `if` statement has an expression that evaluates to true or false in the conditional statement. This happens because JavaScript can coerce any value to be true or false. 

<br>

## Falsy values

A value is truthy if it is not falsy. Falsy values evaluate to be `false`. The falsy values are:

false
undefined
0
-0
On
null
NaN
"" (empty string)

<br>

## Using Logical Operators with truthy and falsy values

The && and || operators work with truthy and falsy values too and also return truthy values that are not always explicitly the boolean value `true`. When using these operators the return value is always the last value evaluated (taking short circuiting into consideration).