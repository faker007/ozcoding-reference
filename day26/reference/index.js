// 문제1: 스코프의 차이 (var는 함수 스코프, let 블록 스코프이기 때문에)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}

// 문제2: 화살표 함수는 스코프가 정적으로 (렉시컬 스코프)에 따라서 결정되기 때문에
const person = {
  name: "Alice",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

person.greet();

// 문제3:
const day = "Monday";
const weather = "sunny";
console.log(`Today is ${day} and the weather is ${weather}`);

// 문제4:
const user = {
  name: "Bob",
  age: 25,
  address: {
    city: "New York",
    zip: "10001",
  },
};

const { name, age, city } = user;

// 문제5:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArray = [...arr1, ...arr2];

// 문제6:
class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("왈왈");
  }
}

// 문제7:
function* numberGenerator() {
  yield 11;
  yield 21;
  yield 31;
  yield 41;
  yield 51;
}

(async () => {
  for await (const num of numberGenerator()) {
    console.log(num);
  }
})();

// 문제8:
const user2 = {
  name: "홍길동",
  [Symbol("id")]: "asdf123",
};

console.log(Object.keys(user2));

// 문제9:
const target = {
  num1: 1234,
  myString: "zxcvs",
};

const handler = {
  get: function (obj, prop) {
    console.log("무야호: " + typeof obj[prop]);

    if (typeof obj[prop] !== "number") {
      throw Error("Not a number");
    }
  },
};

const proxy = new Proxy(target, handler);

// console.log(proxy.myString);

// 문제10:
function fetchData() {
  return fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

async function fetchData2() {
  try {
    const response = await fetch("");
    const data = await response.json();

    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// 문제11:
const numbers = [1, 3, 5, 7, 9];
numbers.includes(7);

// 문제12:
const person2 = { name3: "길동이", age: 28, city: "인천시" };
const { name3, ...details } = person2;
console.log(details);

// 문제13:
const entries = [["fruit", "apple"][("color", "red")]];
Object.fromEntries(entries);

// 문제14:
let value = null ?? "default";

// 문제15:
const order = {
  id: 1,
  customer: {
    name: "Frank",
  },
};

console.log(order?.customer?.name);

// 문제16:

// 문제17:
const banana = "banana";
console.log(banana.replaceAll("a", 0));

// 문제18:
const p1 = new Promise((resolve) => setTimeout(resolve, 300, "첫 번째"));
const p2 = new Promise((resolve) => setTimeout(resolve, 200, "두 번째"));
const p3 = new Promise((resolve) => setTimeout(resolve, 100, "세 번째"));

Promise.any([p1, p2, 3])
  .then((res) => res)
  .catch((err) => err);

// 문제19

// 문제20
const letters = ["x", "y", "z"];
// console.log(letters[letters.length - 1]);
console.log(letters.at(-1));
