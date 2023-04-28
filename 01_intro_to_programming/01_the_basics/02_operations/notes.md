# Operations

Operations are performed on Primitive and Object Data Types.

<br>

## Adding, Subtracting, Multiplying numbers

Performing basic arithmetic. 

<br>

## NaN

Not a number - this is a numeric result signalling an illegal JavaScript operation on numbers e.g. `0 / 0` or some other operation that makes no sense like `7 + undefined` or trying to find the square root of a negative number or trying to coerce a non-number into a number e.g. `Number("Hello");`

All values have a Type and NaN === typeof number.

<br>

## Infinity 

Infinity indicates a number of infinite magnitude, it is a number so large it cannot be written down. 

Any positive number / 0 equals Infinity.

<br>

## -Infinity

-Infinity represents an infinite value less than 0. 

Any negative number / 0 equals -Infinity.

<br>

## Equality Comparisons

Determine when two values are identical. 
`==` Loose equality operator, compares value


`===` Strict equality operator, compares value and type

<br>

## String Concatenation

Using the + operator to combine two strings and concatenate their values together.

### Implicit type coercion

When a number is coerced into a string and used as a string value.

When using the + operator if either operand is a string then the other will attempt to be coerced into a string.

If any