console.log(this);

// 메서드 호출에서의 this
const person = {
  name: "아무개",
  greet: function () {
    console.log(this.name);
  },
};

person.greet();

// 생성자 함수에서의 this
function Person(name) {
  this.name = name;
}

const peron2 = new Person("아무개2");

console.log(peron2.name);

// 명시적 바인딩1: call()
function introduce(age, address) {
  //   console.log(`안녕, 내 이름은 ${this.name} 이고, 나이는 ${age}살이야.`);
  //   this.greet(age, address);
}

// const person3 = {
//   name: "아무개3",
//   greet: function (age, address) {
//     console.log(
//       `${this.name}이며, 나이는 ${age}살의 인사는 person3에서 맡겠다구~
//       그리고, 나는 ${address}에서 살아`
//     );
//   },
// };

// introduce.apply(person3, [27, "지구 어딘가"]);

function introduce2(age) {
  console.log(`Hello, my name is ${this.name} and I'm ${age} years old.`);
}

const person4 = { name: "Gyejin" };

const boundIntroduce = introduce2.bind(person4);

boundIntroduce(25); // "Hello, my name is Gyejin and I'm 25 years old."

function foo() {
  console.log("foo");
}

function bar() {
  foo();

  console.log("bar");
}

bar();

const person5 = {
  name: "아무개5",
  greet: function () {
    console.log(this.name);
  },
};

console.log(person5.greet());

const user = {
  name: "Gyejin",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

user.greet();

const a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise");
  }, 1000);
})
  .then((result) => {
    console.log(result);
    return "Second Promise";
  })
  .then((result) => {
    console.log(result);
  });

var x = 10;

function example() {
  console.log(x);
  var x = 20;
  console.log(x);
}

example();
