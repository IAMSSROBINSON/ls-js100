# Variable Scope

Variable scope is a term that determines the availability of a variable according to where it is declare within a program. 

<br>

## Block scope

Blocks are statements and expressions written inside of curly braces.

Variables declared with the `let` and `const` keywords are block scoped. This means that if the variable is declared inside of curly braces then the availability / accessibility of said variable is confined to within the curly brackets.

<br>

## Types of blocks

- if / else statements
- while loops
- do while loops
- for statements
- switch statements
- try / catch statements

If you declare a variable outside of a block then it is has broader scope and is available inside also, as well as after it. 