// What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);



/*

On line 15 we invoke the bar function and pass in globally scoped foo(an object) and qux(a string value variable)

On line 10 these arguments are received into assigned parameters:
  argument1 is a pointer to the object 
  argument2 is initialized to a local variable 

On line 11 the object property is reassigned to reference a different string value, this mutates the object since the parameter reference is a pointer to the direct address the object is stored at in computer memory

On line 12 the value of the local variable passed in is reassigned to a new value but this new value is only accessibility with the scope of the function block as primitive values are pass by value no reference meaning the value is confined to the scope of the block as defined by curly braces. Primitive values are also immutable and cannot be changed. 

So on line 17 when the console.log method is invoked, the argument passed in in a direct reference to the object key using dot notation and will output the newly assigned value: 'hi'

On line 18 when the console.log method is invoked and the variable passed in as a reference to its value it will output the value of the scope it has available to and that is the outer scope string value: 'hello'.



*/