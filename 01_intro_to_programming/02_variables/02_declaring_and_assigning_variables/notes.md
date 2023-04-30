# Declaring and Assigning Variables 

A variable declaration is a statement that asks the JavaScript engine to reserve space for a variable with a particular name:

```JavaScript
let firstName; // variable declaration
```

The variable is initialized with a value of `undefined` at the declaration if no other value is assigned to it and thus if referencing the variable in node the variable will return `undefined` as it has not been assigned to a more meaningful value yet. 

<br>

Optionally a variable can also explicitly specify an initial value at the time of declaration:

```JavaScript
let firstName = 'Aristotle'; 
// variable declaration with initializer value of a string
// declarations do not have return values because they are statements and statements don't return values
// assignments and reassignments are expressions and these do return values
// `=` sign in a declaration is a syntactic token - it is not referred to as the assignment operator at the initializer stage but only at actual assignment and reassignment
```

The above string is now stored in memory and the variable name `firstName` is used as a label to point to that string elsewhere in the program.

<br>

## Template Literal

A template literal is the syntax: `${}`. It allows for the interpolation / insertion of the value of the variable name so that the value can be used within a string and can be outputted to the console:

```JavaScript
console.log(`Your first name is: ${firstName}`);
```

## Reassigning

The `firstName` variable is not tied to the same string value. It can be reassigned to any value of any data type:

```JavaScript
firstName = 'Alexander the Great';
// > 'Alexander the Great' 
// reassignment expression returns the value to the right of the assignment operator
// the firstName variable now references a new string value at the same memory address
```