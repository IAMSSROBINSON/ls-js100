# Arguments and Parameters

<br>

## Arguments
Arguments are the values passed into a function usually at the time of invoking a function - the values are either primitive or objects. Arguments let you pass data from outside the function's scope into the function so it can access the data. You don't need arguments if the function definition doesn't need access to outside data:

```JavaScript
// Invoking a function and passing an argument from outside the function's scope into the function
say("Hello");

// Any number of arguments can be passed into a function, if there are not enough parameter placeholder values the extra will be ignored in the function 
// If too few arguments are supplied for the number of parameter values then the extra parameter values will have a value of undefined
```

<br>

## Parameters 

In a function definition the names between the parenthesis are Parameters (which are local variables because they are defined locally within the function's body - when the parameter is names this is it's declaration as a local variable). They are the placeholders copies that get assigned the value of the argument passed in and are initialized with the value locally when the function receives the arguments. There should be one parameter value for each argument passed into the function at the time the function is invoked and that value can then be used inside the function to access the argument value.

<br>

## Variables

Function names are variables 
Parameter names are local variables

Function names are either global or local depending on whether the function is at the programs top level (global) or nested inside a class, object or nested inside another function (local). 
