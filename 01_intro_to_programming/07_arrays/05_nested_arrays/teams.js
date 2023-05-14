// track teams of 2
let teams = [
  ['Attalus', 'Seneca'],
  ['Socrates', 'Plato'],
  ['Aristotle', 'Aristoxenus']
];
console.log(teams, '\n');

// reference the individual team by index value
console.log(teams[0]); // [ 'Attalus', 'Seneca' ]
console.log(teams[1]); // [ 'Socrates', 'Plato' ]
console.log(teams[2]); // [ 'Aristotle', 'Aristoxenus' ]

// retrieve the value of an element in a team with an expression
console.log(teams[1][1]) // Plato