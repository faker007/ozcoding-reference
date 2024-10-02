// 일반 함수
function add(a, b) {
  return a + b;
}

// 화살표 함수
const add2 = (a, b) => a + b;

// this 바인딩 예제
const obj = {
  value: 10,
  method: function () {
    setTimeout(() => {
      console.log(this.value);
    });
  },
};

console.log(add(10, 10)); // 20

console.log(add2(10, 10)); // 20

obj.method(); // 10
