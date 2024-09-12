function greet(name, callback) {
  console.log("안녕! " + name);

  callback();
}

function sayGoodbye() {
  console.log("잘가!");
}

greet("홍길동", sayGoodbye);

function printMessage() {
  console.log("3초 후에 출력됩니다.");
}

setTimeout(printMessage, 3000);

// 예시 3: 서버 요청에서의 콜백 함수 (가상 예시)
// function fetchData(callback) {
//   console.log("서버 데이터 받아 오는 중...");

//   setTimeout(() => {
//     const data = { name: "홍길동2", age: 26 };

//     callback(data);
//   }, 2000);

//   setTimeout(() => {
//     const data = { name: "홍길동1", age: 25 };

//     callback(data);
//   }, 1000);

//   setTimeout(() => {
//     const data = { name: "홍길동3", age: 27 };

//     callback(data);
//   }, 3000);
// }

// function processData(data) {
//   console.log("가져온 데이터", data);
// }

// fetchData(processData);

// 예시 4: 에러 처리와 콜백 함수
// function fetchData(callback) {
//   console.log("데이터 가져 오는 중...");

//   setTimeout(() => {
//     const error = true;
//     const data = { name: "홍길동", age: 25 };

//     if (error) {
//       callback("데이터를 가져오는 중 오류 발생", null);
//     } else {
//       callback(null, data);
//     }
//   }, 2000);
// }

// function handleResponse(error, data) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("성공적으로 데이터를 가져 왔습니다.", data);
//   }
// }

// fetchData(handleResponse);

// 예시 5: 콜백 함수의 대안: Promise와 async/await
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Alice", age: 25 };

      resolve(data);
    }, 2000);
  });
}

// fetchData().then((data) => {
//   console.log("가져온 데이터는 ", data);
// });

// Promise, async, await 사용 예시
const go = async () => {
  const data = await fetchData();

  console.log(data);
};

go();
