let greetingMessage = "Good Morning!";

function greetPeople() {
  console.log(greetingMessage); // Good Morning!
}

greetPeople();

/*

A let keyword is used to declare a variable with a name. A primitive string value is initialized to the variable name. The variable is declared in the outer most scope and thus has global scope and accessibility throughout the entire program.

A function declaration (a indicated by the use of the function keyword as the first proponent of the line followed by the function name and the function block / body) occurs on line 3.

The function receives no arguments and has no parameter values.

The job of the function is to invoke the log method of the console object and output the value of the argument passed in which is a reference to the value of the variable through passing in the variable name. 

On line 7 the function is invoked passing no arguments but because the variable has global scope it is available within the inner scope of functions and blocks and thus the output string (the value of the variable name reference) is output to the console by the function being invoked.

*/