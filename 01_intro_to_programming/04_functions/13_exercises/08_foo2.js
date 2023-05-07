// Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

/*

This program should output: 

42
3.1415

On line 8, 3 arguments are passed into the function. 
On line 3, 2 local variable parameter values are initialized to 2 of the values passed into the function and the third value passed in is ignored because there is no parameter value to receive it or be initialized to.
The log method of the console object is invoked on lines 4 & 5 and each will output the values referenced by the local variable parameter counterparts.

*/