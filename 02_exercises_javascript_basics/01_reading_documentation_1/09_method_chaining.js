// Given the following tweet:
let tweet = 'Starting to get the hang of it... #javascript #launchschool';

// What will the following statements evaluate to?
console.log(tweet.split(' ')); // ['Starting', 'to', 'get', 'the', 'hang', 'of', 'it...', '#javascript', '#launchschool'];
console.log(tweet.split(' ').reverse()); // ['#launchschool', '#javascript', 'it...', 'of', 'hang', 'the', 'get', 'to', 'Starting']
console.log(tweet.split(' ').reverse().join(' ')); // '#launchschool #javascript it... of hang the get to Starting'

// Reference the documentation to learn about the return value of each method.

// The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

// The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
// To reverse the elements in an array without mutating the original array, use toReversed().

// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.