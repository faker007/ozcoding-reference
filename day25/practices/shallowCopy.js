const array = [1, 2, 3];
const copiedArray = [...array]; // Shallow copy (얕은 복사)

copiedArray.push(4);

console.log(array); // [1, 2, 3]
console.log(copiedArray); // [1, 2, 3, 4]

// 예시: 얕은 복사의 동작 방식
const originalArray = [1, 2, [3, 4]]; // 중첩된 배열 (Nested Array)
const shallowCopiedArray = [...originalArray];

shallowCopiedArray[2].push(5);

console.log(originalArray); // [1, 2, [3, 4, 5]]
console.log(shallowCopiedArray); // [1, 2, [3, 4, 5]]

console.log(new Date());
