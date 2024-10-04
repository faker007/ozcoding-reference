class Employee {
  #salary;

  constructor() {
    this.#salary = 0;
  }

  getSalary() {
    return this.#salary;
  }

  setSalary(amount) {
    if (amount >= 0) {
      this.#salary = amount;
    }
  }
}

const employee = new Employee();

employee.setSalary(5000);

console.log(employee.getSalary());
