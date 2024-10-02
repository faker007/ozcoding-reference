const person = { name: "홍길동", age: 30, city: "서울시" };
const { name, ...reset } = person;

console.log(name); // 홍길동
console.log(reset); // { age: 30, city: '서울시' }

const newPerson = { ...reset, country: "대한민국" };

console.log(newPerson);
