// Find out what Date.now() returns.

// The Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
console.log(Date.now()); // 1684233380564


let date = new Date();
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());