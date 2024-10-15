// 이벤트 기반 프로그래밍
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// 이벤트 리스너 등록
eventEmitter.on("greet", (name) => {
  console.log(`안녕하세요, ${name}!`);
});

// 이벤트 리스너 등록 2
eventEmitter.on("add", (a, b) => {
  console.log(`${a} 더하기 ${b}는 ${a + b}입니다.`);
});

// 이벤트 발생
eventEmitter.emit("greet", "Node.js");

// 이벤트 발생 2
eventEmitter.emit("add", 100, 200);
