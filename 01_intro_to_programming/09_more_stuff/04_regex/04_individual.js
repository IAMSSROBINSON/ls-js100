// How do you search multiple individual pattern?
// To do this you can enclose each pattern to be searched in parenthesis inside the regex forward slashes.
// the main pattern to be searched will be the outermost pattern and the individual pattern to search within that is enclosed in parenthesis
// It will return results based on the main pattern but will confirm wether the individual pattern was found also
// If any aspect of the regex pattern is not found to be present then null is returned for the entire return value

// Example:

console.log("Hello there how are you".match(/r(e)/g));
// Expect:
// ['re', 'e', index: 9, input: 'Hello there how are you', groups: undefined]