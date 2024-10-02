const p1 = new Promise((_, reject) => setTimeout(reject, 100, "에러 1"));
const p2 = new Promise((resolve) => setTimeout(resolve, 200, "성공 2"));
const p3 = new Promise((resolve) => setTimeout(resolve, 300, "성공 3"));

Promise.any([p1, p2, p3])
  .then((value) => console.log(value))
  .catch((error) => console.error(error));
