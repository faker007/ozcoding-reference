// 배열 구조 분해 할당(Destructuring Assignment)
const [first, second] = [10, 20];
console.log(first); // 10
console.log(second); // 20

// 객체 디스트럭처링
const { name, age } = { name: "홍길동", age: 25 };
console.log(name); // "홍길동"
console.log(age); // 25

// 기본 값 설정
const { gender = "Unknown" } = {};
console.log(gender); // Unknown
