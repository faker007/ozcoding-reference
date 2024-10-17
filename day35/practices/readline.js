const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("이벤트 리스너가 등록 되었습니다. 사용자 입력을 기다리는 중...");

// 이벤트 리스너 등록
rl.question("당신의 이름은 무엇입니까?", (name) => {
  console.log(`안녕하세요, ${name}님!`);

  // 이벤트 리스너 삭제
  rl.close();
});
