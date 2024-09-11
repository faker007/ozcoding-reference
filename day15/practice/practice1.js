// "객체 리터럴"을 사용한 객체 생성
// const person = {
//   name: "홍길동",
//   age: 30,
//   job: "개발자",
// };

// // 객체의 속성에 접근 하는 방법 1
// console.log(person.name);

// // 객체의 속성에 접근 하는 방법 2
// console.log(person["name"]);

const car = {
  brand: "Tesla",
  speed: 120,
  drive: function () {
    console.log(`${this.brand}는 ${this.speed}km로 달려요`);
  },
};

// car.drive();

const dog = {
  name: "댕댕이",
  breed: "진돗개",
  bark: function () {
    console.log("왈왈");
  },
};

// dog.bark();

// 생성자 함수에 대해서, 생성자 함수 = 붕어빵 틀.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(
      `안녕하세요, 제 이름은 ${this.name}입니다. 그리고, 제 나이는 ${this.age}살입니다.`
    );
  };
}

function 붕어빵_틀_생성자_함수(속, 가격) {
  this.속 = 속;
  this.가격 = 가격;

  this.판매 = function () {
    console.log(`${this.속}의 가격은 ${this.가격}원입니다.`);
  };
}

// const person1 = new Person("홍길동", 23);
// const person2 = new Person("아무개", 29);
// person1.greet();
// person2.greet();

const 단팥_붕어빵 = new 붕어빵_틀_생성자_함수("단팥", 700);
const 슈크림_붕어빵 = new 붕어빵_틀_생성자_함수("슈크림", 1000);

단팥_붕어빵.판매();
슈크림_붕어빵.판매();
