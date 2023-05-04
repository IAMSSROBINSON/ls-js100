
function add (number1, number2) { 

  return number1 + number2; // explicit return;

}

let saveResultOfExpressionEvaluation = (add(10, 5));

console.log(saveResultOfExpressionEvaluation);

/*

Here we defined a function using a function declaration as identified by the use of the function keyword as the first instance of code on the line, followed by the function name which is a variable in itself and then parenthesis which contain local variable parameters initialized to the value of the arguments passed into the function from an outside scope into the function. The function body is created by use of the curly braces which outlines the functions block scope. Inside the body of the function the parameter values become arguments as they can be passed to other functions if required. The values are operated on locally (within the confines of the function). The return statement is encountered and the expression once evaluated will return the expression value to the caller location (place where the function was invoked). The return value is saved to a let variable in the outer scope with global scope potential (ability to be accessed from inner scope functions and blocks). This value is the result of the function being invoked and 2 arguments passed into the function. On the last line of code the log method of the console object is called and the variable name (which a reference to its value) is printed to the console.



*/