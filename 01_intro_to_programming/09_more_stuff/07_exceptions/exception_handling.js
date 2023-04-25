let names = ['Socrates', 'Plato', 'Aristotle', undefined, 'Aristoxenus'];


names.forEach((name)=>{
  try {
  console.log(`\n${name}'s name has ${name.length} letters in it.`);
  }
catch (error) {
  console.log("NAME:", error.name);
  console.log("MESSAGE:", error.message);
}})

// try block places inside the callback to handle the possibility of an exception on the forEach

// catches the exception of .length property on undefined and executes the catch block 

// when the catch block ends the program resumes normal operations