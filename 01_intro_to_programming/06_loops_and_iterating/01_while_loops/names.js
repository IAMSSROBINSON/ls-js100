let names = ["Socrates", "Plato", "Aristotle"]; 
let upperNames = [];
let index = 0;

while (index < names.length) {
  console.log(`Index ${index}:`, names[index]);
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index ++;
}
console.log(upperNames);

/*



*/