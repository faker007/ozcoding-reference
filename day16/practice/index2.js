class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  calculateHeight() {
    console.log("계산 완료우");
  }
}

// Person.calculateHeight();

const person1 = new Person();

person1.calculateHeight();
