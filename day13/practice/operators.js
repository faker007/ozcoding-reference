// 산술 연산자 (Arithmetic Operators)
let x = 10;
let y = 5;

let plusX = ++x;
let minusY = --y;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(plusX);
console.log(minusY);

// 비교 연산자 (Comparison Operators)
const a = 10;
const b = "10";

console.log(a == b); // 동등 (값만 같은지 확인.)
console.log(a === b); // 엄격한 동등 (값과 타입이 같은지 확인.)
console.log(a != b); // 부등 (값만 다른지 확인.)
console.log(a !== b); // 엄격한 부등 (값과 타입이 다른지 확인)
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

// 논리 연산자 (Logical Operators)
const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn && isAdmin); // false;
console.log(isLoggedIn || isAdmin); // true;
console.log(!isAdmin); // true

// 할당 연산자 (Assignment Operators)
let z = 20;
z += 5; // 25
z -= 5; // 20;
z *= 2; // 40;
z /= 10; // 4

console.log(z);
