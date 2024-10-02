function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const generator = numberGenerator();

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().done); // false
console.log(generator.next().value); // 4
