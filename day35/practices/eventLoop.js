console.log("시작");

setTimeout(() => {
  console.log("setTimeout 콜백");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 콜백");
});

process.nextTick(() => {
  console.log("nextTick 콜백");
});

console.log("끝");
