// Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

// The first human year corresponds to 15 cat years.
// The second human year corresponds to 9 cat years.
// Every subsequent human year corresponds to 4 cat years.
// For example:

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32

function catAge (humanYears) {

  let oneYear = 15;
  let twoYears = 9;
  let additionalYears = 4;

  if (Number.isNaN(Number(humanYears)) || humanYears <= 0) {
    return humanYears;
  } else if (humanYears === 1) {
    return oneYear;
  } else if (humanYears === 2) {
    return oneYear + twoYears;
  } else if (humanYears > 2) {
    return oneYear + twoYears + ((humanYears - 2) * additionalYears);
  }
}

