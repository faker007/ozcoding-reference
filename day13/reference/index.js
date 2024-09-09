const readline = require("node:readline");

// 데이터 타입 확인: 선언한 변수들의 데이터 타입을 typeof 연산자를 사용하여 출력하세요.
const 문자열 = "문자열";
const 숫자 = 1234;
const 논리 = false;
const 언디파인드 = undefined;
const 널 = null;
const 심볼 = Symbol("심볼");

console.log(typeof 문자열);
console.log(typeof 숫자);
console.log(typeof 논리);
console.log(typeof 언디파인드);
console.log(typeof 널);
console.log(typeof 심볼);

console.log("-".repeat(50));

var name = "홍길동";
let age = 27;
const address = "지구";

console.log(name);
console.log(age);
console.log(address);

console.log("-".repeat(50));

const person = {
  name: "마가린",
  age: 32,
};

console.log(person.name);
console.log(person.age);

console.log("-".repeat(50));

let num1 = 23;
let num2 = 73;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let firstName = "길동";
let lastName = "홍";

console.log("-".repeat(50));

console.log(firstName + lastName);

const person2 = {
  age: 34,
};

const person3 = {
  age: 16,
};

console.log("-".repeat(50));

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("당신은 몇 살인가요?\n", (age) => {
//   age >= 18 ? console.log("성인입니다.") : console.log("성인 아닙니다.");

//   rl.close();
// });

// 배열 선언과 사용
const colors = ["보라색", "파란색", "검은색"];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

// 배열 반복과 합계 계산
const numbers = [1, 5, 2, 3, 10, 231, 402, 502, 4444];
console.log(
  numbers[0] +
    numbers[1] +
    numbers[2] +
    numbers[3] +
    numbers[4] +
    numbers[5] +
    numbers[6] +
    numbers[7] +
    numbers[8]
);

// 논리 연산자
// AND 연산자
const isAdmin = false;
const isLoggedIn = true;

console.log(isAdmin && isLoggedIn); // false;

// OR 연산자
console.log(isAdmin || isLoggedIn); // true

// NOT 연산자
console.log(!isAdmin && isLoggedIn); // true
console.log(!isAdmin || !isLoggedIn); // ??

// person2.age >= 18 ? console.log("성인입니다.") : console.log("성인 아닙니다.");
// person3.age >= 18 ? console.log("성인입니다.") : console.log("성인 아닙니다.");
