# Three Ways To Define A Function

<br>

## Function Declaration

```JavaScript
function myFunctionDeclaration () {
  // function body
}
```

- you can call the function before you declare a function declaration

<br>

## Function Expression

```JavaScript
let myFunctionExpression = function () {
  // function body
}
```

- declare a variable called `myFunctionExpression` and assign it to the function expression after the = symbol.
- This is a JavaScript First Class Function because it can be treated like any other value / object.
- function expressions are saved to a variable
- you cannot invoke a function expression before it is declared
- any function that doesn't have the word function at the beginning is a function expression

<br>

## Arrow Functions

```JavaScript
let myArrowFunction = () => {
  // function body
}
```

- arrow functions are similar to function expressions but with different syntax.
- arrow functions have single line implicit return whereby if the expression (can have sub-expressions but must evaluate to a single value) that would be within the function body is on one line the curly braces can be omitted and the value will be returned without using the return keyword.

<br>

## Single Line Implicit return

- function keyword omitted
- expression evaluation must be one on line to be implicitly returned
- return statement omitted 
- parameter parenthesis optional

