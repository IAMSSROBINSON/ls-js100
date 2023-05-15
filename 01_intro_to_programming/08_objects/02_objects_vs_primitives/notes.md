# Objects VS Primitives

<br>

## Primitive Data Types

Primitive data types are immutable and don't have parts that can be changed, they are atomic in that they are indivisible. Operations on primitive data types evaluates as entirely new values.

Strings
Numbers
Booleans
Null
Undefined
BigInt
Symbols 

<br>

## Object Data Types

Objects are complex values, they store primitive data types inside of them.

Objects are usually mutable (unless explicitly stated), you can add, remove and edit their content values.

Objects
Arrays
Dates
Functions

<br>

## Functions Are Objects

Functions are objects and this means they can be assigned to variables, passed to other functions as arguments and returned by other functions - First Class Function.

```JavaScript
// hello variable is created by the function declaration automatically
function hello () {
  console.log('Hello there!');
}

hello();

let greet = hello; // greet variable points to hello, function name

greet(); // prints 'hello there!'

// hello and greet variables both reference the same object, the function
```

This feature is also what lets us defined methods as object methods (functions within objects as values).

<br>

## Not Objects Or Primitives

Anything that is not data or a function is neither primitive value nor object:

- identifiers: variables function names
- statements: if, else/if, while, try, break
- keywords: new, function, let, const, class
- comments
- anything else not data nor function



