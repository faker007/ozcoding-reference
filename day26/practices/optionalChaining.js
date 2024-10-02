const user = {
  profile: {
    name: "홍길동",
  },
};

console.log(user?.profile?.name); // 홍길동
console.log(user?.address?.city); // undefined (옵셔널 체이닝을 사용하게 되면 에러 발생 안함)

const func = user?.getName?.(); // 함수가 없으면 undefined 반환
