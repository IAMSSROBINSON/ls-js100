# Default Parameters

Functions do not always have to receive arguments and a function can be invoked without passing any argument at all.

For testing purposes, the potential for a missing argument value or otherwise - one may want to use a default (pre-set) parameter value in a function so that when invoked the function will make use of said value in the absence of a passed in argument.

<br>

```JavaScript
function say (test = 'hello') { // local variable declared, default value assigned
  console.log(test + "!"); // argument value if present or default value used
}

say("Howdy"); // Howdy!
say(); // hello!
```