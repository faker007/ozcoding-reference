const entries = [
  ["name", "Grace"],
  ["age", 29],
];
const obj = Object.fromEntries(entries);

console.log(obj);

const map = new Map(entries);
const objFromMap = Object.fromEntries(map);

console.log(objFromMap);
