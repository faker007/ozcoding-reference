const foo = null ?? "default"; // Null 병합 연산자 (왼쪽의 값이: null이거나 undefined 일 때만...)
const foo2 = undefined ?? "default2"; // Null 병합 연산자

console.log("foo: " + foo); // "default"
console.log("foo2: " + foo2); // "default2"

const bar = 0 ?? 42;
const bar2 = false || false; // or operator

console.log("bar: " + bar); // 0
console.log("bar2: " + bar2); // 42
