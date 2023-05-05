let consoles = {
  log : (message) => console.log(message)
}

consoles.log("Hello"); // invoke log method on the consoles object using dot notation. The value to the log property is a function that accept a string argument and outputs it to the console using a single line implicit return arrow function