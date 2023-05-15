// hello variable is created by the function declaration automatically
function hello () {
  console.log('Hello there!');
}

hello();

let greet = hello; // greet variable points to hello, function name

greet(); // prints 'hello there!'