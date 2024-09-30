// [ x ] 1. 사용자는 숫자를 입력하고, -> (numbers 변수 선언)
// [ x ] 2. 프로그램은 짝수를 필터링한 후 -> filter 이용?
// [ x ] 3. 각 요소를 제곱하고, -> map과 제곱 이용?
// [ x ] 4. 마지막으로 배열의 합계를 출력하는 기능을 구현할 수 있도록 합니다. -> reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const mapped = evenNumbers.map((item) => item ** 2);
const reduced = mapped.reduce((acc, curr) => acc + curr, 0);

console.log(evenNumbers); // [2, 4, 6, 8]
console.log(mapped); // [4, 16, 36, 64]
console.log(reduced); // 120
