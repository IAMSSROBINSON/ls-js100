let answer = 41;
answer = 42;
console.log(answer);


/*

On line 1 we use the let keyword to declare a globally scoped variable named: answer (this tells JavaScript to allocate space in the computer memory for a value to be stored using the named variable as a reference to that value) and then the assignment operator (=) is used to initialize the variable with an integer primitive number value of: 41 (the value of 41 is thereby stored at the same memory address that the variable answer was allocated).

On line 2 we reassign the value stored at the address of the variable (answer) to: the number 42, meaning the variable now refers to a new value but at the same address.

On line 3 we invoke the log method of the console object and pass in the named reference of the variable as an argument to print the value (42) to the output stream.

*/