# Iteration Methods

Built in JavaScript methods to iterate (visit one at a time) over the contents of an array.

<br>

## `.forEach()`

- callback function passed into forEach() method as an argument.
- callback function is invoked by forEach() method for each element in array.
- the element value is passed to the callback by forEach() method for each element that is present in the array and is initialized to a local variable / parameter.
- forEach() method always returns undefined, implicitly.

<br>

## `.map()`

- does not mutate the caller.
- callback function passed to .map() as an argument.
- callback function invoked for each element in the caller/array.
- element value is passed to the callback by .map() method for each element present in the array and is initialized to a local variable / parameter.
- .map() returns a new array which can be saved to a variable
- the new array contain one return value for each callback function invoked on each element as returned by the .map() method.
- the new array is reset each time the .map() is invoked thus causing no side effects to mutating arrays.

<br>

## `.filter()`

- does not mutate the caller.
- callback function passed to .filter() as an argument.
- callback function invoked for each element but only truthy values filtered and returned by callback function otherwise element gets ignored.  
- returns a new array.
- the new array includes all elements from the calling array that the callback function returns a truthy value for.

<br>

## `.reduce()`

- reduce does not mutate the caller.
- the .reduce() method reduces the contents of an array to a single value.
- the .reduce() method takes 
  - a callback function and 
  - an initial value from which the accumulator will start
- the callback function itself 
  - takes an accumulator with (+, -, *, /) and
  - a current element from the array
  - within the callback body the accumulator performs an action to each element starting at the initial value previously passes in and returns a value used as the next accumulator in the next callback invocation

- reduce can be used to compute string, objects, arrays or anything else.
