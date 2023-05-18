// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

let string = 'launch school tech & talk';
let capitalizedString = string.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
console.log(capitalizedString);