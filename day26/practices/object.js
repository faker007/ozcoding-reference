const user = { name: "홍길동", age: 28, address: "서울시", hobby: "낚시" };

const tuple = Object.entries(user);

// console.log(tuple);

// console.log(tuple[0][1]); // 홍길동
// console.log(tuple[2][0]); // address
// console.log(tuple[2][1]); // 서울시

console.log(Object.values(user));
