# Common Gotcha

Always declare variables appropriately with `let` or `const` keywords.

<br>

Variables can be created by simply assigning a value to a variable name without keyword declaration but this is strongly discouraged. 

Undeclared variables all have global scope and ignore block and function scope completely.This makes it easier to accidentally reassign the value in a different scope elsewhere in the program which can have undesirable results. 