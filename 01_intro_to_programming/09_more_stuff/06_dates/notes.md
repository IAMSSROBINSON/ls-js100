# Dates

JavaScripts date constructor creates objects that represent time and date. The objects provide methods for working with the values.

<br>

## new Date();

The `new Date();` constructor will provide the current date a and time.
A date from the past or future can also be passed in as a string argument in the format Month Day, Year and the object returned can be used to find out things such as the day of the week on that date:

```JavaScript
let dayInTheFuture = new Date('August 17, 3000');
console.log(dayInTheFuture.getDay()); // 0: Sunday
// Sun Aug 17 3000 00:00:00 GMT+0100 (British Summer Time)
```

<br> 

## getDay();

This method will provide a number from 0 = Sunday to 6 = Saturday denoting the day of the week.

<br>

## getMonth();

This method will provide a number from 0 = Jan to 11 = Dec denoting the month of the year.

<br>

## getFullYear();

This method will provide the current year.


