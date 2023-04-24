let date = new Date();
console.log("date:", date);

let currentYear = date.getFullYear();
console.log("currentYear:", currentYear);

console.log("string:", String(date));
console.log(String(date).split(" "));

let month = String(date).split(" ")[1];
let day = String(date).split(" ")[2];

console.log("TODAY:", day, month, currentYear);

let time = String(date).split(" ")[4]
console.log("TIME:", time);

console.log((15).toString(2));

let newDate = new Date();
console.log("DAY:", newDate.getDay());
console.log("MONTH:",newDate.getMonth());
console.log("YEAR:", newDate.getFullYear());
console.log(String(newDate))


function getDayOfTheWeek (date) {

  let day = [
    'Sunday', 
    'Monday', 
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  return day[date.getDay()];
}

console.log(getDayOfTheWeek(new Date()));

console.log(new Date().toLocaleDateString());