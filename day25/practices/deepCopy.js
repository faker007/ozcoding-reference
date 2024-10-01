const nestedArray = [
  [1, 2],
  [3, 4],
];
const deepCopiedArray = JSON.parse(JSON.stringify(nestedArray));

deepCopiedArray[0].push(5);

console.log(nestedArray);
console.log(deepCopiedArray);
