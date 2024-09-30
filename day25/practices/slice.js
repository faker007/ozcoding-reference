const numbers = [1, 2, 3, 4, 5];

const sliced = numbers.slice(1, 3);

// 활용 용법 2: 전체 배열에 대하여 얕은 복사 (Shallow copy)
const sliced2 = numbers.slice();

console.log(sliced); // [2, 3]
console.log(sliced2); // [1, 2, 3, 4, 5]
