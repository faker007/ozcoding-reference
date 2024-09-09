console.log(a); // Hoisting

var a = 10;
console.log(a); // 10

var a = 20; // 중복 선언 가능
console.log(a); // 20

function abc() {
  // 함수 스코프
  var a = 30;

  console.log(a);
}

abc();
