function first () {
  console.log("First function");
}

function second () {
  first();
  console.log("Second function");
}

second();

/*

Upon running the program JavaScript creates a Stack Frame to keep track of what function is currently in operation and where the program will resume to once function executions return - this is similar to the main function in C and everything must execute from here. 

On line 10 a function is invoked. Information about the current location of the function in the program is pushed to the top of the Call Stack in a Stack Frame. 

On line 6 a function is invoked. Information about it and its location is pushed to the top of the Call Stack in a new Stack Frame. 

On line 2 the function from line 6 invokes a console.log() method and information about it is added to the Call Stack in a new Stack Frame. The console.log() method evaluates immediately, information about it is popped from the stack and return of the program resumes at the position held prior. 

The 'first' function then returns and is popped from the Call Stack and program resumes at the location prior on line 7. 

On line 7 the console.log() method is added to the stack, executes and is popped from the stack and program resumes on line 8 whereby the 'second' function is popped from the stack leaving an empty Call Stack and program resumes runtime on line 11. 

*/