let array = [10, 20, 30];

// forIn is used on arrays to access the indexes/keys that exist in the array
// it returns the indexes/keys as strings
for (let index in array) {
  console.log(typeof index,`:`, index);
}
// string : 0
// string : 1
// string : 2


// forIn is used here with bracket notation to access the values within the array
// it returns the values as numbers when used with bracket notation
for (let value in array) {
  console.log(typeof array[value],`:`, array[value]);
}
// number : 10
// number : 20
// number : 30