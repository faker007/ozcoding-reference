function greet(name, callback) {
  console.log("안녕! " + name);

  callback();
}

function sayGoodbye() {
  console.log("잘가!");
}

greet("홍길동", sayGoodbye);

function printMessage() {
  console.log("3초 후에 출력됩니다.");
}

setTimeout(printMessage, 3000);

// 예시 3: 서버 요청에서의 콜백 함수 (가상 예시)
// function fetchData(callback) {
//   console.log("서버 데이터 받아 오는 중...");

//   setTimeout(() => {
//     const data = { name: "홍길동2", age: 26 };

//     callback(data);
//   }, 2000);

//   setTimeout(() => {
//     const data = { name: "홍길동1", age: 25 };

//     callback(data);
//   }, 1000);

//   setTimeout(() => {
//     const data = { name: "홍길동3", age: 27 };

//     callback(data);
//   }, 3000);
// }

// function processData(data) {
//   console.log("가져온 데이터", data);
// }

// fetchData(processData);

// 예시 4: 에러 처리와 콜백 함수
// function fetchData(callback) {
//   console.log("데이터 가져 오는 중...");

//   setTimeout(() => {
//     const error = true;
//     const data = { name: "홍길동", age: 25 };

//     if (error) {
//       callback("데이터를 가져오는 중 오류 발생", null);
//     } else {
//       callback(null, data);
//     }
//   }, 2000);
// }

// function handleResponse(error, data) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("성공적으로 데이터를 가져 왔습니다.", data);
//   }
// }

// fetchData(handleResponse);

// 예시 5: 콜백 함수의 대안: Promise와 async/await
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Alice", age: 25 };

      resolve(data);
    }, 2000);
  });
}

// fetchData().then((data) => {
//   console.log("가져온 데이터는 ", data);
// });

// Promise, async, await 사용 예시
const go = async () => {
  const data = await fetchData();

  console.log(data);
};

go();

// 클로저(Closure)
function outer() {
  let count = 0;

  return function inner() {
    count++;

    console.log(count);
  };
}

const counter = outer();

counter();
counter();
counter();
counter();

// 예시 2: 클로저를 사용한 데이터 보호
function bankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function (amount) {
      balance += amount;
      console.log(`잔액: ${balance}원`);
    },
    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`잔액: ${balance}원`);
      } else {
        console.log("잔액이 부족합니다.");
      }
    },
    getBalance: function () {
      return balance;
    },
  };
}

const myAccount = bankAccount(1000); // 초기 잔액 1000원

// myAccount.deposit(500); // 잔액: 1500원
// myAccount.withdraw(200); // 잔액: 1300원
// console.log(myAccount.getBalance()); // 1300

// 예시 3: 클로저를 활용한 간단한 카운터
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;

      console.log(count);
    },
    decrement: function () {
      count--;

      console.log(count);
    },
  };
}

const counter2 = createCounter();

// counter2.increment();
// counter2.increment();
// counter2.increment();
// counter2.increment();
// counter2.decrement();
// counter2.decrement();

// 예시 1: 고차 함수의 기본 예시
function repeat(n, action) {
  for (let i = 100; i < n; i++) {
    action(i);
  }
}

repeat(103, console.log);

// 예시 2: 함수를 반환 하는 고차 함수 예시
function greaterThan(n) {
  return function (m) {
    return m > n;
  };
}

const greaterThan10 = greaterThan(10);

console.log(greaterThan10(11));
console.log(greaterThan10(9));

const numbers = [1, 2, 3, 4, 5];

const mappedAndFiltered = numbers
  .map((number) => {
    return number * 2;
  })
  .filter((number) => number >= 5)
  .map((number) => {
    return number * 2;
  })
  .filter((number) => {
    return number >= 15;
  })
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0);

console.log(mappedAndFiltered);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("홍길동", 27);
person1.greet();

// 상속 예시
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name}가 왈왈`);
  }
}

const dog = new Dog("댕댕이");

dog.speak();

class MathUtil {
  static square(x) {
    return x * x;
  }
}

console.log(MathUtil.square(5));
