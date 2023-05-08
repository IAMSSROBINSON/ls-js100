function foo (str) {
  let found = ["Pete", "Alli", "Chris"].find(name => name === str);
  console.log(found);
  return found ?? "Not found";
}
console.log(foo("Alli")); // Alli
console.log(foo("Allison")); // Not found