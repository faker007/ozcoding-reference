class Car {
  // 생성자
  constructor(brand, model, year) {
    // 속성 (Property, 프로퍼티)
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  //  메서드
  startEngine() {
    console.log(`${this.brand} ${this.model} Engine started.`);
  }
}

const myCar = new Car("Hyundai", "Sonata", 2020);

myCar.startEngine();
