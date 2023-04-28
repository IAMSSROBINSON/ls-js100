# Expressions and Return Values

When using Node, expressions are typed into the prompt. Expressions are anything JavaScript can evaluate to a value that can then be captured and used in code. Any value is essentially an expression that can evaluate to itself and thus operators are not always required. 

<br>

```JavaScript
console.log(5 + 2); 
// 5 + 2 is an expression and requires computing of addition arithmetic to evaluate to 7
// the return value of the expression is undefined however as the console returns nothing
```

In Node the console function will print the value of the expression but the value returned by the console.log function is undefined seen as no value is explicitly returned from the function. 