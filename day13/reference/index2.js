// Day 13 과제 두번 째 레퍼런스
// 1. var, let, const를 사용하여 각각 변수를 선언하고 값을 할당하세요.
var i1 = 10;
let i2 = 10;
const i3 = 10;
console.log(i);

// 2. 다음 변수들의 데이터 타입을 콘솔에 출력하세요.

let a = 42; // number
let b = "hello"; // string
let c = true; // boolean
let d = null; // object
let e; // undefined

// 3. 두 개의 숫자를 더하고, 뺄셈, 곱셈, 나눗셈을 하는 코드를 작성하세요.

let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// 4. 두 개의 숫자를 비교하고 결과를 콘솔에 출력하세요.
let num11 = 10;
let num12 = 5;

console.log(num11 > number21);
console.log(num11 < number21);

// 5. 논리 연산자를 사용하여 두 개의 불리언 변수를 조합하세요.
// 5.1 AND
// 5.2 OR
// 5.3 NOT

let b1 = true;
let b2 = false;

console.log(b1 && b2); // false
console.log(b1 || b2); // true
console.log(b1 && !b2); // true

// 6. 할당 연산자를 사용하여 변수에 값을 더하고 빼세요.
// 6.1 += 더하기 할당 연산자
// 6.2 -= 빼기 할당 연산자
// 6.3 *= 곱하기 할당 연산자
// 6.4 /= 나누기 할당 연산자
// 6.5 %= 나머지 할당 연산자

let num3 = 10;
num3 += 10;
num3 -= 5;
num3 *= 10;
num3 /= 5;
num3 %= 10;
console.log(num3);

// 7. 두 개의 문자열을 연결하고 결과를 출력하세요.

const str1 = "Hello";
const str2 = "World";

const result = str1 + " " + str2; // Hello World

// 8. 템플릿 리터럴을 사용하여 변수를 문자열에 포함하세요.

const name = "Alice";
const age = 25;
const message = "Hi Alice";

console.log(`안녕, 내 이름은 ${name}이고, 나이는 ${age}이야.`);
console.log(`${message}`);

// 9. 배열을 선언하고 요소에 접근하여 출력하세요.

const fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry

// 10. 객체를 선언하고, 속성에 접근하여 출력하세요.

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(person.name);
console.log(person.age);
console.log(person.city);

// 11.	두 수를 더하는 함수를 선언하고 호출하여 결과를 출력하세요.

function add(a, b) {
  return a + b;
}

console.log(add(4, 4)); // 8
console.log(add(20, 4)); // 24

// 12. 주어진 수가 짝수인지 홀수인지 판단하는 조건문을 작성하세요.
let num = 7;

num % 2 === 0 ? true : false; // true이면 짝수, false이면 홀수

// (선행) 13. 1부터 10까지의 숫자를 출력하는 for 반복문을 작성하세요.
for (let z = 1; z < 11; z++) {
  console.log(z);
}

// (선행) 14. 1부터 10까지의 숫자를 출력하는 while 반복문을 작성하세요.
let zz = 0;

while (zz < 11) {
  zz++;
  console.log(zz);
}

// (선행) 15. 배열의 각 요소를 출력하는 forEach 반복문을 작성하세요.
const fruits2 = ["Apple", "Banana", "Cherry"];

fruits2.forEach((element) => {
  console.log(element); // Apple, Banana, Cheery -> 순서대로 출력되게 된다.
});

// 16. (선행) 배열의 각 요소에 2를 곱한 새로운 배열을 반환하는 코드를 작성하세요.
// map는 return 값이 새로운 element가 됨.
const numbers = [1, 2, 3, 4];
const mapped = numbers.map((number) => {
  return number * 2;
});

// 17. (선행) 배열에서 짝수만 필터링하는 코드를 작성하세요.
// filter는 return 값이 true인 element만 다시 반환 함.
const numbers2 = [1, 2, 3, 4, 5, 6];
numbers2.filter((number2) => {
  return number2 % 2 === 0;
});

// 18. (선행) 문자열을 대문자로 변환하고 출력하는 코드를 작성하세요.
const str = "hello world".toUpperCase();
console.log(str);

// 19. (선행) 현재 날짜와 시간을 출력하는 코드를 작성하세요.
console.log(new Date());

// 20. (선행) Math 객체를 사용하여 주어진 수의 제곱근을 구하는 코드를 작성하세요.
let num100 = 16;
console.log(Math.sqrt(num100));
