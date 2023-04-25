try {
  console.log(firstName);
  
}
catch (error) {
  console.log("Name: ", error.name);
  console.log("Message: ", error.message);
}
finally {
  console.log("This happens regardless")
}

// Name:  ReferenceError
// Message:  firstName is not defined