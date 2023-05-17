// Take a moment to read the MDN documentation on the continue statement.

// Then write a for loop that loops over the elements of the array cities and logs the length of each string to the console. If the element is null, skip forward to the next iteration without logging anything to the console.


let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let index = 0; index < cities.length; index++) {
  if (cities[index] === null) {
    continue;
  } 
    console.log(cities[index].length);
}
// 8
// 11
// 5
// 6
// 6
// 7