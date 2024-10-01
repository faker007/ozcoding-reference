const array = [1, 2, 3];

Object.freeze(array);

array.push(4);

console.log(array);
