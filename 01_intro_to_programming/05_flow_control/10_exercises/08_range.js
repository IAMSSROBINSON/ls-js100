// Write a function that logs whether an integer is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

function numberRange (int) {
  if (int >= 0 && int <= 50) {
    console.log(`${int} is between 0 and 50`);
  } else if (int >= 51 && int <= 100) {
    console.log(`${int} is between 51 and 100`);
  } else if (int < 0) {
    console.log(`${int} is less than 0`);
  } else {
    console.log(`${int} is greater than 100`)
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
  