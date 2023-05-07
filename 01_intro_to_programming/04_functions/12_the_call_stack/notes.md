# The Call Stack

The call stack helps JavaScript keep track of what function is executing and where execution should resume to once a function resolves. 

<br>

## How does the Call Stack work?

The call stack works like a stack of books, stacking a newer book on top of a previously placed book and if removing a book you remove the book from the top first: First In Last Out mechanism (FILO).

In the Call Stack information about the current function is placed at the top of the stack and when the function returns the information is removed from the stack. 

<br>

## The Process of the Call Stack

When a program starts running a call stack exists and a default item called the Stack Frame is present - This represents the top-level of the program. 

This is like the main function in C programming - it must be present in order to do anything and all things run from it. The Stack Frame keeps track of what part of the main program it is currently working on. 

When the program invokes a function it updates the Stack Frame with a current program location - JavaScript will use this later to determine where execution should resume to once execution of the function finishes running (or if a function is invoked within the current function then this function is added to the top of the stack along with details about its location and it must return and be popped from the stack before the previous function can also be popped from the stack by returning a value).

When all stack entries have been returned - only the main stack frame remains. All JavaScript functions and methods use the same single threaded Call Stack, whether it is a built in function, a method like console.log or an explicitly defined function, they all push a new frame to the stack when they are invoked and they all expose the previous frame on the stack once returned and resume there.

<br>

## Stack Frame Limit

The stack can handle entries of up to 10000 before a rangeError might be encountered. 