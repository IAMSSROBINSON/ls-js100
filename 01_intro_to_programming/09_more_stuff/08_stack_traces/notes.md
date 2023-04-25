# Stack Traces

A readable reporting of the call stacks content at the point an exception / error occurred within a program. A stack trace reports where the error occurred and how it got there. 

<br>

```JavaScript
function foo () {
  console.log(bar);
}

foo();

// Stack Trace:
// ReferenceError: bar is not defined
    // at foo (/Users/ssr/Documents/REPOS/ls-js100/01_intro_to_programming/09_more_stuff/08_stack_traces/error.js:2:15)
    // at Object.<anonymous> (/Users/ssr/Documents/REPOS/ls-js100/01_intro_to_programming/09_more_stuff/08_stack_traces/error.js:5:1)
```

The stack trace states:

- the error was detected on line`:2` of the code, at character`:15`, where bar is referenced as a variable

- the error came from a call on line`:5`, at character`:1`, where an anonymous function was called
  - code at the global level is treated as anonymous even though this function has a name

- Each filename mentioned in the stack trace helps to pinpoint the location of the failure and how the program came to this point
  
- Each time JavaScript calls a function it places some information about the program location on top of the call stack, when the program finishes running the function - it removes the item from the top of the call stack and uses it to return to the calling location