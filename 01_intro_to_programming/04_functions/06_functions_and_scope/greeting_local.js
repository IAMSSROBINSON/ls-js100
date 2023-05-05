function greetPeople () {
  let greetingMessage = "Good Morning!";
  console.log(greetingMessage);
}

greetPeople(); // Good Morning!

/*

On line 1 a function declaration occurs and a name initialized to the function. 
On line 2 inside of the function body and locally scoped variable is declared and initialized to a primitive string value. The variables value is only accessible within the function block as defined by the curly braces and cannot be used in any outer scope.
On line 3 the log method of the console object is invoked and the name of the variable is passed into the method to output the value to the console.

None of the above happens until the function is invoked on line 6 which creates the function, declares and initialized the variable and output the value of the variable to the console. Once these actions are performed the function ends and the values are destroyed until such time that the function might be invoked again.

*/