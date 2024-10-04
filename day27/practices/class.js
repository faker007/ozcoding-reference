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

class 붕어빵_틀 {
  constructor(맛, 가격) {
    this.맛 = 맛;
    this.가격 = 가격;
  }

  sell() {
    console.log(`${this.맛} 붕어빵이 ${this.가격}원에 팔렸습니다.`);
  }
}

const 팥_붕어빵 = new 붕어빵_틀("팥", 1000);
const 슈크림_붕어빵 = new 붕어빵_틀("슈크림", 1200);

팥_붕어빵.sell();
슈크림_붕어빵.sell();
