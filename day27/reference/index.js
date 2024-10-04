// 문제 1: 클래스와 객체의 개념 이해
// JavaScript에서 클래스를 정의하고, 해당 클래스를 사용하여 객체를 생성하는 방법을 설명하세요. 코드 예시를 포함해 주세요.
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log("Engine started.");
  }
}

const myCar = new Car("Hyundai", "Sonata", 2020);

myCar.startEngine(); // 출력: Engine started.

// 문제 2: 상속의 활용
// JavaScript에서 상속을 사용하여 클래스를 확장하는 방법을 설명하세요. 부모 클래스와 자식 클래스를 정의하고, 상속을 통해 재사용하는 예시 코드를 작성하세요.
class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}

const myDog = new Dog();

myDog.eat(); // 출력: Eating...
myDog.bark(); // 출력: Barking...

// 문제 3: 다형성의 개념
// 다형성이란 무엇인가요? JavaScript에서 메서드 오버라이딩을 사용하여 다형성을 구현하는 방법을 설명하고, 관련 예시를 작성하세요.
class Animal {
  makeSound() {
    console.log("Some sound...");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow...");
  }
}

class Cow extends Animal {
  makeSound() {
    console.log("Moo...");
  }
}

const animals = [new Animal(), new Cat(), new Cow()];
animals.forEach((animal) => animal.makeSound());

// 출력:
// Some sound...
// Meow...
// Moo...

// 문제 4: 추상화와 인터페이스
// 추상화의 개념과 JavaScript에서 추상화를 구현하는 방법을 설명하세요. 추상 클래스를 만들고 이를 상속받는 클래스의 예시 코드를 작성하세요.
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate an abstract class.");
    }
  }

  getArea() {
    throw new Error("getArea() must be implemented.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.getArea()); // 출력: 78.53981633974483

// const shape = new Shape(); // 오류: Cannot instantiate an abstract class.

// 문제 5: 생성자 함수와 객체 생성
// JavaScript에서 생성자 함수의 역할은 무엇인가요? 생성자를 사용하여 객체를 초기화하는 예시를 작성하세요.
class Student {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

const student = new Student("Alice", 12345);
student.study(); // 출력: Alice is studying.

// 문제 6: Getter와 Setter 메서드
// JavaScript에서 Getter와 Setter 메서드를 사용하여 객체의 속성에 접근하고 수정하는 방법을 설명하세요. 관련 예시를 작성하세요.
class Employee {
  #salary;

  constructor() {
    this.#salary = 0;
  }

  // Getter 메서드
  getSalary() {
    return this.#salary;
  }

  // Setter 메서드
  setSalary(amount) {
    if (amount >= 0) {
      this.#salary = amount;
    }
  }
}

const employee = new Employee();

employee.setSalary(5000); // Setter 호출

console.log(employee.getSalary()); // Getter 호출, 출력: 5000

// 문제 7: 함수형 프로그래밍의 특징
// 함수형 프로그래밍의 주요 특징과 장점을 설명하세요. 순수 함수, 불변성, 고차 함수의 개념을 포함하여 답변하세요.
const add = (a, b) => a + b; // 순수 함수 예시

// 문제 8: 순수 함수와 부수 효과
// 순수 함수와 부수 효과의 차이를 설명하세요. 순수 함수의 예시와 부수 효과가 있는 함수의 예시를 작성하세요.
// 순수 함수
function add(a, b) {
  return a + b;
}

// 부수 효과가 있는 함수
let count = 0;

function increment() {
  count += 1; // 외부 상태 count를 변경 (부수 효과)

  return count;
}

// 문제 9: 고차 함수의 활용
// JavaScript에서 고차 함수란 무엇인가요? map, filter, reduce 함수의 사용 예시를 각각 작성하세요.
const numbers = [1, 2, 3, 4, 5];

// map: 각 요소를 변환하여 새로운 배열 생성
const doubled = numbers.map((n) => n * 2); // [2, 4, 6, 8, 10]

// filter: 조건에 맞는 요소만으로 새로운 배열 생성
const evens = numbers.filter((n) => n % 2 === 0); // [2, 4]

// reduce: 배열을 하나의 값으로 축소
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// 문제 10: 불변성 유지
// 불변성을 유지하는 방법을 설명하고, JavaScript에서 Spread 연산자를 사용하여 객체나 배열의 불변성을 유지하는 예시 코드를 작성하세요.
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4]; // 새로운 배열 반환

console.log(originalArray); // [1, 2, 3]
console.log(newArray); // [1, 2, 3, 4]

const originalObj = { a: 1, b: 2 };
const newObj = { ...originalObj, b: 3 };

console.log(originalObj); // { a: 1, b: 2 }
console.log(newObj); // { a: 1, b: 3 }

// 문제 11: 커링(Currying)
// 커링의 개념을 설명하고, 커링을 적용한 함수의 예시를 작성하세요.
function add(a) {
  // 클로저
  return function (b) {
    return a + b;
  };
}

const addFive = add(5);
console.log(addFive(3)); // 출력: 8

// 문제 12: 함수 합성
// 함수 합성의 개념을 설명하고, 두 개 이상의 함수를 결합하여 새로운 함수를 만드는 예시를 작성하세요.
const compose = (f, g) => (x) => f(g(x));

const square = (x) => x * x;
const addOne = (x) => x + 1;

const squareAfterAddOne = compose(square, addOne);
console.log(squareAfterAddOne(2)); // 출력: 9 (2 + 1 = 3, 3^2 = 9)

// 문제 13: 모나드의 저주

// 문제 14: 재귀 함수의 활용
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 출력: 120

// 문제15: 문제 15: 객체 지향 프로그래밍과 함수형 프로그래밍 비교

// 문제 16: 오버라이딩과 오버로딩의 차이
// 오버라이딩(Overriding)과 오버로딩(Overloading)의 차이점을 설명하고, JavaScript에서 오버라이딩을 구현한 예시를 작성하세요.

// 문제 17: 함수형 프로그래밍에서의 상태 관리
// 함수형 프로그래밍에서 상태 관리는 어떻게 이루어지나요? 상태 변화를 최소화하고 불변성을 유지하는 방법을 설명하세요.
const state = { count: 0 };

function increment(state) {
  return { ...state, count: state.count + 1 };
}

const newState = increment(state);

console.log(newState); // { count: 1 }

// 문제 18: 프로토타입 상속
// JavaScript에서 프로토타입 상속이란 무엇인가요? 프로토타입을 사용하여 객체 간 상속을 구현하는 방법을 설명하고, 예시 코드를 작성하세요.
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(this.name + " is eating.");
};

function Dog(name) {
  Animal.call(this, name); // 부모 생성자 호출
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(this.name + " is barking.");
};

const myDog2 = new Dog("Rex");
myDog2.eat(); // 출력: Rex is eating.
myDog2.bark(); // 출력: Rex is barking.

// 문제 19: Todo 리스트 함수형 프로그래밍 예제
// 불변 데이터 구조를 위한 객체
const todos = [
  { id: 1, text: "함수형 프로그래밍 공부", completed: false },
  { id: 2, text: "자바스크립트 복습", completed: true },
  { id: 3, text: "프로젝트 아이디어 구상", completed: false },
];

// 항목 추가 함수
const addTodo = (todos, newTodo) => [...todos, newTodo];

// 항목 삭제 함수
const removeTodo = (todos, id) => todos.filter((todo) => todo.id !== id);

// 완료 상태 토글 함수
const toggleTodo = (todos, id) =>
  todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

// 미완료 항목 필터링
const incompleteTodos = todos.filter((todo) => !todo.completed);

// 사용 예제
let updatedTodos = addTodo(todos, {
  id: 4,
  text: "테스트 코드 작성",
  completed: false,
});

updatedTodos = toggleTodo(updatedTodos, 1);
updatedTodos = removeTodo(updatedTodos, 2);

console.log(updatedTodos);

/*
  [
    { id: 1, text: '함수형 프로그래밍 공부', completed: true },
    { id: 3, text: '프로젝트 아이디어 구상', completed: false },
    { id: 4, text: '테스트 코드 작성', completed: false }
  ]
  */
