const array = [10, 20, 30, 40, 50];

array[0] = 8000;

console.log(array);

Object.freeze(array);

array[0] = 90;

console.log(array);
