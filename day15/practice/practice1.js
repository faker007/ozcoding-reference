// "객체 리터럴"을 사용한 객체 생성
// const person = {
//   name: "홍길동",
//   age: 30,
//   job: "개발자",
// };

// // 객체의 속성에 접근 하는 방법 1
// console.log(person.name);

// // 객체의 속성에 접근 하는 방법 2
// console.log(person["name"]);

const car = {
  brand: "Tesla",
  speed: 120,
  drive: function () {
    console.log(`${this.brand}는 ${this.speed}km로 달려요`);
  },
};

// car.drive();

const dog = {
  name: "댕댕이",
  breed: "진돗개",
  bark: function () {
    console.log("왈왈");
  },
};

// dog.bark();

// 생성자 함수에 대해서, 생성자 함수 = 붕어빵 틀.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(
      `안녕하세요, 제 이름은 ${this.name}입니다. 그리고, 제 나이는 ${this.age}살입니다.`
    );
  };
}

function 붕어빵_틀_생성자_함수(속, 가격) {
  this.속 = 속;
  this.가격 = 가격;

  this.판매 = function () {
    console.log(`${this.속}의 가격은 ${this.가격}원입니다.`);
  };
}

// const person1 = new Person("홍길동", 23);
// const person2 = new Person("아무개", 29);
// person1.greet();
// person2.greet();

const 단팥_붕어빵 = new 붕어빵_틀_생성자_함수("단팥", 700);
const 슈크림_붕어빵 = new 붕어빵_틀_생성자_함수("슈크림", 1000);

단팥_붕어빵.판매();
슈크림_붕어빵.판매();

// 배열 생성 및 요소 접근
const fruits = ["Apple", "Banana", "Cherry", 79, false, Symbol("백화점")];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 배열의 메소드들
const numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers);

numbers.pop();

console.log(numbers);

const colors = ["red", "green", "blue"];

colors.shift(); // ["green", "blue"];

console.log(colors);

colors.unshift("yellow"); // ["yellow", "green", "blue"]

console.log(colors);

const numbers2 = [1, 2, 3];
const doubled = numbers2.map(function (num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6]

const ages = [18, 21, 16, 30, 25];
const adults = ages.filter(function (age) {
  return age >= 18;
});

console.log(adults); // [18, 21, 30, 25];

const initialValue = 0;

const numbers3 = [1, 2, 3, 4];
const sum = numbers3.reduce(function (total, num) {
  return total + num;
}, initialValue);

console.log(sum); // 10

// forEach: map과 비슷하지만, map과는 다르게 반환 값이 없음.
const numbers4 = [1, 2, 3];

numbers4.forEach(function (num) {
  console.log(num);
});

console.log(numbers4);

// find
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const user = users.find(function (_user) {
  return _user.age > 30;
});

console.log(user); // { name: "Charlie", age: 35 }

// findIndex
const users2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const index = users.findIndex(function (_user) {
  return _user.age > 30;
});

console.log(index); // 2

// every
const numbers5 = [2, 4, 6];
const isAllEven = numbers5.every(function (num) {
  return num % 2 === 0;
});

console.log("isAllEven: " + isAllEven);

// some
const numbers6 = [1, 2, 3];
const hasEven = numbers6.some(function (num) {
  return num % 2 === 0;
});

console.log("hasEven: " + hasEven);

// sort
const 과일들 = ["Banana", "Apple", "Cheery"];

과일들.sort();

console.log(과일들);

const numbers7 = [10, 3, 2];

numbers7.sort(function (a, b) {
  return a - b;
});

console.log(numbers7);

// reverse
const letters = ["a", "b", "c"];

letters.reverse();

console.log(letters);
