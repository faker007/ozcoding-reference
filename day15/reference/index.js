// 1. 객체 생성하기 (난이도: 쉬움)
const person = {
  이름: "홍길동",
  나이: 254,
};

// 2. 객체 속성 접근하기 (난이도: 쉬움)
const car = { brand: "Tesla", model: "Model S" };
console.log(`자동차 브랜드: ${car.brand}`);
console.log(`자동차 모델: ${car.model}`);

// 3. 객체 메소드 호출하기 (난이도: 중간)
const person2 = {
  name: "홍길동",
  sayHello: function () {
    console.log("Hello I am " + this.name + ".");
  },
};
person2.sayHello();
person2["sayHello"]();

// 4. 객체에 메소드 추가하기 (난이도: 중간)
const person3 = {
  name: "Bob",
  greet: function () {
    console.log("Hi, i'm " + this.name);
  },
};
person3.greet();
person3["greet"]();

// 5. "생성자 함수"로 객체 만들기 (난이도: 중간)
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const newPerson1 = new Person("John", 30);
const newPerson2 = new Person("Bob", 25);

console.log(newPerson1.name);
console.log(newPerson2.name);

// 6. 객체 배열 필터링하기 (난이도: 중간)
const people = [
  { name: "John", age: 17 },
  { name: "Jane", age: 20 },
  { name: "paul", age: 15 },
  { name: "Mark", age: 25 },
];

const filtered = people.filter((_person) => {
  return _person.age >= 18;
});

console.log(filtered);

// 7. 배열 생성하기 (난이도: 쉬움)
const 과일들 = ["Apple", "Banana", "Orange"];

// 8. 배열 요소 접근하기 (난이도: 쉬움)
console.log(과일들[1]); // 배열의 모든 인덱스는 0부터 시작하기 때문에

// 9. 배열에 요소 추가하기 (push) (난이도: 쉬움)
const numbers = [1, 2, 3, 4];
numbers.push(5);

console.log(numbers); // [1, 2, 3, 4, 5]

// 10. 배열에서 요소 제거하기 (pop) (난이도: 쉬움)
const colors = ["Red", "Green", "Blue"];
colors.pop();

console.log(colors); // ["Red", "Green"]

// 11. 배열 첫 번째 요소 제거하기 (shift) (난이도: 쉬움)
const days = ["Monday", "Tuesday", "Wednesday"]; // ["Tuesday", "Wednesday"]
days.shift();

console.log(days);

// 12. 배열 앞에 요소 추가하기 (unshift) (난이도: 쉬움)
const names = ["Bob", "Charlie"];
names.unshift("Alice");

console.log(names); // ["Alice", "Bob", "Charlie"]

// 13. 배열을 순회하며 값 출력하기 (forEach) (난이도: 중간)
const numbers2 = [1, 2, 3];
numbers2.forEach(function (element) {
  console.log(element);
});

// 14. 배열을 두 배로 변환하기 (map) (난이도: 중간)
const numbers3 = [1, 2, 3, 4];
const mapped = numbers3.map(function (내_마음대로) {
  return 내_마음대로 * 2;
});

console.log(mapped); // [2, 4, 6, 8]

// 15. 배열 필터링하기 (filter) (난이도: 중간)
const ages = [12, 18, 20, 14, 25];
const filtered2 = ages.filter(function (age) {
  return age >= 18;
});

console.log(filtered2); // [18, 20, 25]

// 16. 배열 합계 구하기 (reduce) (난이도: 중간)
const prices = [10, 20, 30, 40];
const reduced = prices.reduce(function (acc, curr) {
  return acc + curr;
}, 0);

console.log(reduced); // 100

// 17. 배열에 특정 값이 있는지 확인하기 (includes) (난이도: 쉬움)
const 과일_바구니 = ["사과", "바나나", "체리", "오렌지", "머스캣"];
const isContains_바나나 = 과일_바구니.includes("바나나");
const isContains_포도 = 과일_바구니.includes("포도");

console.log("isContains_바나나: " + isContains_바나나); // true
console.log("isContains_포도: " + isContains_포도); // true or false?

// 18. 배열 정렬하기 (sort) (난이도: 중간)
const numbers4 = [5, 2, 8, 1, 3];
numbers4.sort(function (a, b) {
  return a - b;
});

console.log(numbers4);

// 19. 배열 뒤집기 (reverse) (난이도: 쉬움)
const letters = ["a", "b", "c", "d"];
letters.reverse();

console.log(letters);

// 20. 배열 일부 잘라내기 (slice) (난이도: 중간)
const animals = ["Cat", "Dog", "Elephant", "Lion"];
const sliced = animals.slice(2, 4);

console.log(sliced);

// 21. 배열 요소 추가 및 제거하기 (splice) (난이도: 중간)
const 과일_바구니2 = ["사과", "바나나", "오렌지"];
과일_바구니2.splice(1, 0, "딸기");

console.log(과일_바구니2);

// 22. 배열 두 개 합치기 (concat) (난이도: 쉬움)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);

console.log(combined);

// 23. 조건을 만족하는 첫 번째 요소 찾기 (find) (난이도: 중간)
// 23-1. products 안에 있는 객체들의 속성 값 중 하나인 price를 기준으로 내림 차순으로 정렬을 해달라는 요청 사항.
const products = [
  { name: "Shirt", price: 50 },
  { name: "Shoes", price: 120 },
  { name: "Hat", price: 80 },
  { name: "Hat2", price: 250 },
  { name: "Hat3", price: 170 },
  { name: "Hat4", price: 100 },
  { name: "Hat5", price: 105 },
  { name: "Hat6", price: 120 },
];

const found = products.find(function (element) {
  return element.price >= 100;
});

const sorted = products.sort(function (a, b) {
  return b.price - a.price;
});

console.log(found);
console.log(sorted);

// 24. 모든 요소가 조건을 만족하는지 확인하기 (every) (난이도: 중간)
const numbers5 = [2, 4, 6, 8];
const isAllEven = numbers5.every(function (number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log("isAllEven: " + isAllEven);

// 25. 배열 요소 중 하나라도 조건을 만족하는지 확인하기 (some) (난이도: 중간)
const ages2 = [16, 20, 18, 19, 28];

// 199번과 200번은 거의 상동하다.
// ages2.some((element) => {});
// ages2.some(function (element) {});

const isSomebodyOver21 = ages2.some((element) => {
  return element >= 21;
});

console.log(isSomebodyOver21);

// 26. 배열에 중복된 값이 있는지 확인하기 (난이도: 상)
const numbers6 = [1, 2, 3, 4, , 77, 88, 33, 44, 11, 1];
const my_set = new Set(...[numbers6]);

console.log("numbers6.length: " + numbers6.length);
console.log("my_set.size: " + my_set.size);

const checkIsThereAnyDuplicate = () => {
  let isThere = false;

  for (let i = 0; i < numbers6.length; i++) {
    for (let k = i + 1; k < numbers6.length; k++) {
      if (numbers6[i] === numbers6[k]) {
        isThere = true;
        console.log("numbers6[i]: " + i + " " + numbers6[i]);
        console.log("numbers6[k]: " + k + " " + numbers6[k]);
      }
    }
  }

  return isThere;
};

console.log(checkIsThereAnyDuplicate());

// 27. 객체 배열의 속성 값을 기준으로 정렬하기 (난이도: 중간)
const people2 = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mark", age: 35 },
];

const sorted2 = people2.sort((a, b) => {
  return a.age - b.age;
});

console.log(sorted2);

// 28. 조건을 만족하는 요소의 인덱스 찾기 (findIndex) (난이도: 중간)
const ages3 = [16, 18, 22, 20];
const foundIndex = ages3.findIndex((age) => {
  return age >= 21;
});

console.log(foundIndex); // 2

// 29. 배열을 문자열로 변환하기 (join) (난이도: 쉬움)
const words = ["Hello", "World", "JavaScript"];
const joined = words.join(" ");

console.log(joined);

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, [6, 7]],
];

// 30. 중첩된 배열 평탄화하기 (flat) (난이도: 쉬움)
const flattened = nestedArray.flat(3);

console.log(flattened);
