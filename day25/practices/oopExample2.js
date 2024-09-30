class Car {
  constructor(model) {
    this.model = model;
    this.mileage = 0;
  }

  drive(distance) {
    this.mileage += distance;

    console.log(`${this.model}이 ${distance}km 주행 했습니다.`);
  }

  getMileage() {
    console.log(`${this.model}의 총 주행거리: ${this.mileage}km`);
  }
}

const car1 = new Car("Tesla");
const car2 = new Car("BMW");

car1.drive(100);
car1.getMileage();

car2.drive(200);
car2.getMileage();
car2.drive(200);
car2.drive(200);
car2.drive(200);
car2.drive(200);
car2.drive(200);
car2.drive(200);
car1.drive(100);
car1.drive(100);
car1.drive(100);
car1.drive(100);
car1.drive(100);
car1.drive(100);

car1.getMileage();
car2.getMileage();
