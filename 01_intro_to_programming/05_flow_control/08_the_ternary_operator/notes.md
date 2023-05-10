# The Ternary Operator

A shorter way to write a simple conditional statement as opposed to an if/else conditional statement is the use of the Ternary Operator.

The ternary operator uses the ? and : symbols, as well as 3 operands.

```JavaScript
console.log(1 === 1 ? 'this is true' : 'this is false'); // this is true
```

<br>

## How The Ternary Operator Works

JavaScript evaluates the first operand (the comparisons).
If ? it evaluates to be truthy then JavaScript evaluates the second operand and returns its value, otherwise it will evaluate the third operand and return its value.

<br>

## Ternary Operators Are Expressions

The ternary operator is an expression. It can be saved to a variable, passed as an argument, returned from a function and do all the things variables can do. This is in contrast to an if/else statement which cannot do these things because statements cannot be captured and do not evaluate to a value.

<br>

## Usage

It is best to use for simple selection between 2 values (not to actions). The ternary expression result should almost always to saved to a variable, passed to a function as an argument or returned by a function, otherwise use an if/else statement. 

Do not set variables within the ternary trueVariableName = 'true' : falseVariableName = 'false' operands.
Do not print within the ternary console.log(true): console.log(false) operands.
