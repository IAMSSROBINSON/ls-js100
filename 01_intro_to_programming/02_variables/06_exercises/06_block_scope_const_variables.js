// Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/*

This program should not produce any errors whilst printing the value of the variable: FOO to the output stream / console / terminal window: 'bar'.

The reason is that const (like let) declares a block scoped variable. This means that where the variable is declared has meaning as to where its value can be accessed. 

On line 3 a const variable is declared and initialized with a primitive string value: 'bar' at the top level of the program (outside of any blocks) which means that it can be accessed both inside functions and blocks and outside.

On line 5 we again use const to declare a new variable and initialize it to to a value however the variable is declared within the block started on line 4 with the use of the curly brace which closes after the statement made on line 5, on line 6. This variable cannot be seen outside of the block scope and thus the method invocation on line 8 will only reference the variable declared on line 3 with the value: 'bar'.

*/