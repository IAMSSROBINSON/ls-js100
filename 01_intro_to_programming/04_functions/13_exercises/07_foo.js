// Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');

/*

This program should output: 

Hello
undefined

Only 1 argument is passed into the function on line 8 however there are two parameter variables as placeholders on line 3. 

The first parameter will be initialized with the argument value and the second parameter value will be default undefined even though it is not explicitly stated it is a variable with an absence of a value and is thus of type undefined.

The method invocation on line 4 with therefore output the value of the first parameter local variable and on line 5 the second parameter variable is referenced and this will output undefined to the console.

*/