class Person {
  constructor(name) {
    this.name = name;
  }
}

class Employee extends Person {
  constructor(name, company) {
    super(name); // 부모 클래스의 생성자 호출

    this.company = company;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Company: ${this.company}`);
  }
}

const employee = new Employee("Alice", "Tech Corp");

employee.displayInfo(); // 출력: Name: Alice, Company: Tech Corp
