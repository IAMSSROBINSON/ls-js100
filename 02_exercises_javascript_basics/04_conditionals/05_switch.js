// Switch
// Take a look at the code below. Without running it, determine what it will log to the console. If you're not sure, refer to the MDN documentation on switch statements.

let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}


/*

This code will log to the console:

neigh
tweet tweet
*cricket*

The reason is because the value of the variable inside the switch statement parenthesis is matched to the corresponding case and thus executes the clause associated with it however, the clause does not contain a break statement and execution falls through into the clauses below executing all beneath it that do not contain break statements until the end of the switch block.

*/