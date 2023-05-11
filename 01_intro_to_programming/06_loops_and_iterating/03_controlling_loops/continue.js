let names = ["Socrates", "Plato", "Aristotle"];
let upperNames = [];
let index = 0;

for (let index = 0; index < names.length; index++) {
 
  if (names[index] === "Plato") {
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}




console.log(upperNames);