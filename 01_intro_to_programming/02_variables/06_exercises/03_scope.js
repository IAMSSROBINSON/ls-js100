// What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);

/*

This should produce a ReferenceError because on line 4 we declare a variable with the let keyword and thus the variable is block scoped and is only available within the block as defined by the curly braces.

On line 7 we attempt to reference the value of the variable by passing the variable name as an argument of the log method on the console object to print it to the console however the variable name cannot be seen as it is confined to within the block thus producing a ReferenceError as there is no seeming definition for the argument: foo.

*/