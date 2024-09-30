const car = {
  brand: "Tesla",
  model: "Model S",
  year: 2024,
  start: function () {
    console.log(`${this.brand}: ${this.model}가 시동이 걸립니다.`);
  },
};

console.log(car.brand); // Tesla

car.start(); // Tesla: Model S가 시동이 걸립니다.
