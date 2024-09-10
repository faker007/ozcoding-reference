const greet = function () {
  console.log("Hello from the other side");
};

// greet = function() {} // 오류 발생!

let greet2 = function () {
  console.log("Hey~");
};

greet2();

greet2 = function () {
  console.log("Hey~ again!");
};

greet2();
