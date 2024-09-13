// 1. 템플릿 리터럴에서 변수를 문자열에 삽입하기 위해 사용되는 문법은 무엇인가요?
// -> a

// 2. 아래 코드의 출력 결과는 무엇인가요?
// -> a

// 3. 템플릿 리터럴을 사용하여 여러 줄의 문자열을 어떻게 작성할 수 있나요?
const example = `
    안녕하세요!
    안녕하세요!
    안녕하세요!
    안녕하세요!
    안녕하세요!
    안녕하세요!
`;

// 4. 배열 디스트럭처링(구조 분해 할당)을 사용하여 변수 first와 second에 [10, 20]을 할당하는 코드를 작성하세요.
const [first, second] = [10, 20];
console.log(first);
console.log(second);

// 5. 객체 디스트럭처링을 사용하여 객체의 name과 age 속성을 변수로 추출하는 코드를 작성하세요.
const person = { name: "Gyejin", age: 28 };
const { name, age } = person;
console.log(name);
console.log(age);

// 6. 디스트럭처링 할당에서 기본값을 설정할 수 있나요? (예 or 아니요)
// -> 예
const [a1, b1 = 20] = [10];
console.log("a1: " + a1);
console.log("b1: " + b1);

// 7. 스프레드 연산자를 사용하여 두 배열 [1, 2]와 [3, 4]를 결합하는 코드를 작성하세요.
const array1 = [1, 2];
const array2 = [3, 4];
const result = [...array1, ...array2];
console.log(result);

// 8. 스프레드 연산자를 사용하면 배열을 깊은 복사할 수 있다. (참 or 거짓)
// -> 거짓! -> 스프레드 연사자를 사용하면 배열은 얕은 복사를 할 수 있다.

// 9. 아래 코드를 실행했을 때 출력 결과는 무엇인가요?
const arr = [1, 2];
const newArr = [...arr, 3, 4];
console.log(newArr); // [1, 2, 3 ,4]

// 10. 나머지 매개변수를 사용하여 여러 개의 숫자를 인자로 받아 그 합을 구하는 sum 함수를 작성하세요.
const sum = (...args) => {
  return args.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 11. 아래 함수의 결과는 무엇인가요?
function printNumbers(first, ...rest) {
  console.log(first);
  console.log(rest);
}

printNumbers(1, 2, 3, 4);
// 1
// [2, 3 ,4]
// -> a

// 12. 나머지 매개변수는 항상 함수의 마지막 매개변수로 사용되어야 한다. (참 or 거짓)

// 13. math.js 파일에서 add 함수를 기본 내보내기(default export)하고, main.js 파일에서 불러오는 코드를 작성하세요.
// math.js
// export default function add (a, b) {
// }

// main.js
// import add from './math.js'
// add()
