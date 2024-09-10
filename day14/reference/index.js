// 문제 1: 숫자를 입력받아 그 숫자가 짝수이면 "짝수입니다"를, 홀수이면 "홀수입니다"를 출력하는 함수를 작성하세요.
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log("짝수입니다.");
  } else {
    console.log("홀수입니다.");
  }
}

function checkAge(age) {
  if (age >= 18) {
    console.log("성인입니다.");
  } else {
    console.log("미성년자입니다.");
  }
}

checkEvenOdd(16);
checkAge(17);
