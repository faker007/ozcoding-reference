// 1. 전역 스코프
var globalVar = "I am global"; // 전역 스코프

function example() {
  console.log(globalVar); // 어디서나 접근 가능
}

example(); // "I am global"

// 2. 함수 스코프
function example2() {
  var functionScoped = "I am function scoped";

  console.log(functionScoped);
}

example2();

// console.log(functionScoped); // 에러 발생!

// 3. 블록 스코프
if (true) {
  var blockScoped = "I am block scoped";

  console.log(blockScoped);
}

// for (...) {}

console.log(blockScoped);

// 4. 렉시컬 스코프 (Lexical Scope)
function outer() {
  let outerVar = "I'm from outer function";

  function inner() {
    console.log(outerVar);
  }

  inner();
}

outer();

// 5. 클로저 (Closure)
function outer2() {
  let count = 0;

  return function inner() {
    count++;

    console.log(count);
  };
}

const counter = outer2();

counter();
counter();

// 콜백 (Callback)
function doSomething(callback) {
  setTimeout(function () {
    console.log("Doing something...");

    callback();
  }, 1000);
}

function done() {
  console.log("Done!");
}

doSomething(done);

// 프로미스 (Promise)
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Fail...");
  }, 1000);
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// async / await
// https://pokeapi.co/api/v2/pokemon/ditto
async function fetchData() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/ditto323232"
    );

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("fetchData() 실패 했어요...");
    console.error(err);
  }
}

fetchData();
