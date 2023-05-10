let hitchhiker = true;

let foo = hitchhiker ? 42 : 3.1415; // assign result to variable
console.log(foo); 

console.log(hitchhiker ? 42 : 3.1415) // pass result as argument

function ternaryExpression (hitchhikerParam) {
  return hitchhiker ? 42 : 3.1415 // return result from function
}

console.log(ternaryExpression(hitchhiker));