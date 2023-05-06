# Mutating The Caller

A method can sometimes mutate the object that invokes it - this is to say that the method mutates the caller.

<br>

## Non-destructive methods

Methods that return a new string or object when invoked but leave the previous value or object unchanged e.g. `.toUpperCase()`.

<br>

## Destructive methods

Methods that when invoked mutate the values of the object upon which they are called e.g. ``.

<br>

## Mutability

Primitive values are pass by value: Strings, Numbers, Booleans, Undefined, Null, NaN, BigInt, Symbols - cannot be mutated, they are immutable and their values never change. Operations on these values always return a new value.  

Objects and Array are pass by reference and are mutable, only they can be changed. They may or may not return a new value and may or may not mutate the object data depending on the method used. 

<br>