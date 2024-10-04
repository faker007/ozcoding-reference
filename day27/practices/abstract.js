class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new TypeError("Cannot construct Shape instances directly");
    }
  }

  getArea() {
    throw new Error("Must override method");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();

    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const myCircle = new Circle(5);

console.log(`Area: ${myCircle.getArea()}`);

const shape = new Shape();
