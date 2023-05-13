let array = [1, 2, 3];

array.forEach(function (number) {
  console.log(number);
})

console.log('\n');

array.forEach((number)=>{
  console.log(number);
})

console.log('\n');

array.forEach(number => console.log(number + 2));