// Take a look at this code snippet:

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
// What does this program log to the console? Why?

/*

On line 3 we use the 'let' keyword to declare a block scoped variable. The tells the JavaScript engine to allocate space in computer memory for a value referenced by the variable name 'foo'. The variable is declare at the top level of the program (outside of any blocks) and thus has global scope and is available for use throughout the whole program both inside and outside of functions and blocks where possible and not otherwise shadowed.

We use the '=' symbol as a syntactic token to initialize the variable: foo to the primitive string value 'bar' stored at the memory address referenced by the variable name: foo.

On line 4 a block is created, denoted by use of the curly brace.
On line 5 a statement is made that includes a new variable declaration using the let keyword to illustrate that the variable is again block scoped and available for use within the confines of the curly braces. The syntactic token '=' is used to instruct the variable name to reference the primitive string value 'qux'.

On line 8 the program invokes the log method on the console object and passes in a reference to the value of a variable named: foo to be printed to the standard output stream / console / terminal window.

Because the variable declare on line 3 is globally scoped it is this variable that is used as a reference to the value stored at the allocated address in memory and thus the string 'bar' is printed to the output stream / console / terminal window. The variable declared on line 5 cannot be seen by the console.log() method as it can only be seen within the scope of the block defined.

*/