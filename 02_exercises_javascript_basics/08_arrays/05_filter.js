// Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];

let numberOfScoresOver100 = 0;

scores.forEach((number)=>{
  if (number >= 100) {
    numberOfScoresOver100++;
  }
})

console.log(numberOfScoresOver100);