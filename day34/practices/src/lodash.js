const _ = require("lodash");

const users = [
  { userName: "Alice", age: 25 },
  { userName: "Bob", age: 30 },
  { userName: "Gyejin", age: 35 },
];

// users 배열의 userName만 배열로 추출.
const userNames = _.map(users, "userName");

console.log(userNames);

// users 배열에서 age가 30 이상인 사용자만 추출.
const filteredOver30Users = _.filter(users, (user) => user.age >= 30);

// /users 배열에서 age가 30 이상인 객체에 대해서, userName 키만 추출.
const userNamesOver30Years = _.map(filteredOver30Users, "userName");

console.log(filteredOver30Users);
console.log(userNamesOver30Years);

const difference = _.difference([2, 1, 4, 5, 6], [2, 3, 6]);

console.log(difference);
