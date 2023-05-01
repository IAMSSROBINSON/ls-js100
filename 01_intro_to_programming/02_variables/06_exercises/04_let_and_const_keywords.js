// What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

/*

This code should produce a print the first 4 lines of 3 console.log() invocations. 
On line 8 however the program attempts to reassign the value of a const declared variable and const declared variables are immutable in that their values cannot be changed or reassigned. Therefore console.log() invocations on lines 9, 10 and 11 will never be actualized as the TypeError occurring on line 8 will halt the program.

*/