// What is .test()
// .test() is a method of the RegEx object.
// It uses the regex pattern to test is presence in a string argument.
// If the pattern is found within the string then it returns boolean true.
// If the pattern is not found then it returns boolean false.

// Example:

console.log(/ll/.test("Hello"));

if (/pell/.test("Hello") === false) {
  console.log("Pattern not found!\n");
}