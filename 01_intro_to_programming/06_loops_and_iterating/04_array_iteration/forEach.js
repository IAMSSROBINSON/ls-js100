let names = ["Socrates", "Plato", "Aristotle"];

// ANONYMOUS FUNCTION EXPRESSION AS CALLBACK FUNCTION PROVIDED AS ARGUMENT TO THE METHOD
// names.forEach(function(name){
//   console.log(name);
// })

// ANONYMOUS FUNCTION AS CALLBACK FUNCTION PROVIDED AS ARGUMENT TO THE METHOD
// names.forEach((element)=>{
//   console.log(element);
// })

// ARROW FUNCTION: SINGLE LINE IMPLICIT RETURN
// names.forEach(name => console.log(name));

/*

The forEach() method is invoked on the names array object. 
The forEach() method accepts a first class anonymous callback function expression or arrow function  as its argument (it is a first class function because it can be treated like a variable and be saved to a variable, passed as an argument or returned from a function). 
The callback function accepts an argument which is initialized to the value of the current element being iterated on. This value can be operated on inside the body of the method and will occur for each iteration of each element (iteration meaning to invoke the callback function and operate on one element at a time for each element in sequence).

*/

