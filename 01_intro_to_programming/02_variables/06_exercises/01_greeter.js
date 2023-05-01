// Write a program named greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program:

// $ node greeter.js
// Good Morning, Victor.
// Good Afternoon, Victor.
// Good Evening, Victor.

let firstName = 'Victor';
console.log(`Good Morning, ${firstName}.`);
console.log(`Good Afternoon, ${firstName}.`);
console.log(`Good Evening, ${firstName}.`);

/*

In this program on line 8 we use the let keyword to declare a variable named 'firstName'. This tells the JavaScript engine to allocate space in memory for a value that may come to be stored there and to use the variable name as a reference to accessing that value.

The primitive string value 'Victor' is stored at the same memory address allocated to the 'firstName' variable and thus referencing the variable name will grant accessibility to the value at that address.

The variable has global scope as it is declared outside of the scope of any function blocks, meaning the variable name can be referenced throughout the entire program as it was declared with the let keyword (which is block scoped) at the top level of the program.

On line 9 the log method of the console object is invoked and an interpolated string is passed in as the argument. The interpolated expression (the variable name 'firstName') is inserted into the string using template literal syntax of backticks `` and ${} symbols so that the resolved expression value will be present in the resulting string that is printed to the console / terminal window.

These steps are repeated on lines 10 and 11 with small adjustments to the string literal that will change the resulting string printed but not change the interpolated expression value because they make use of the same interpolated expression.

These strings are printed to the console / terminal window:

Good Morning, Victor.
Good Afternoon, Victor.
Good Evening, Victor.

*/