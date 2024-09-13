// 태그드 탬플릿 (Tagged Template Literals) 기초
function tag(strings, ...values) {
  console.log(strings);
  console.log(values);
}

let a = 5;
let b = 10;

tag`The sum of ${a} and ${b} is ${a + b} ${b - a}`;

// 태그드 탬플릿 (Tagged Template Literals) 예시 1
function i18n(strings, ...values) {
  const lang = "ko";

  if (lang === "en") {
    return `The sum of ${values[0]} and ${values[1]} is ${values[2]}.`;
  }

  if (lang === "fr") {
    return `La somme de ${values[0]} et ${values[1]} est ${values[2]}.`; // 프랑스어로 변환
  }

  if (lang === "ko") {
    return `${values[0]}과 ${values[1]}의 합계는 ${values[2]}입니다.`; // 한국어로 변환
  }
}

let a2 = 5;
let b2 = 10;

console.log(i18n`The sum of ${a} and ${b} is ${a + b}.`);

const person = { name: "홍길동" };
const { name: userName, age: userAge = 40 } = person;

console.log(userName); // '홍길동'
console.log(userAge); // 28
