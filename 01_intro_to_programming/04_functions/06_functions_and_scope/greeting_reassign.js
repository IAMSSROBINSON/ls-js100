let greetingMessage = "Good Morning!";

function greetPeople () {
  console.log(greetingMessage);
}

function changeGreetMessage (newMessage) {
  greetingMessage = newMessage;
}

changeGreetMessage("Good Evening");
greetPeople(); // Good Evening


/*

On line 1 a global variable is declared using the let keyword and initialized to a primitive string value.

On line 11 a function is invoked and a string is passed is as the argument to the function.

On line 7 the function that was invoked is declared and the argument passed in is received as a locally scoped parameter variable. The value of the string passed into the function from the outer scope is initialized to the local parameter variable as its value.

On line 8 the function body and job of the function takes place, the globally scoped outer variable reference is accessed and the value that it referenced is reassigned to reference the value initialized to the parameter value - which is a new string.

On line 12 a new function is invoked and this function is declared on line 3. No arguments are received but the function body states that the function should invoke the log method on the console object and pass in the globally scoped variable name as a reference to its value to output it to the output stream / console.

Because the value of the globally scoped variable was changed in the first function invocation on line 7 the function invocation on line 12 produces the printing of the new string value.

*/