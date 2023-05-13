let array = [1, 2, 1, 2];

let saveReduce = array.reduce((accumulator, element) => {
  return accumulator * element;
}, 1);


console.log(saveReduce);

// arr.reduce((accumulator, element) => accumulator + element, 0)