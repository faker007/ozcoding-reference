// # OOP 심화 과정 실습 예제
// ## 동물원 관리 시스템 구축

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    throw new Error("makeSound() must be implemented");
  }
}

class Mammal extends Animal {
  makeSound() {
    console.log(`${(this, this.name)} (포유류): 으르렁`);
  }
}

class Bird extends Animal {
  makeSound() {
    console.log(`${this.name} (조류): 짹짹`);
  }
}

class Fish extends Animal {
  makeSound() {
    console.log(`${this.name} (어류): 뻐금뻐금`);
  }
}

class Zoo {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  allAnimalsAMakeSound() {
    this.animals.forEach((animal) => {
      animal.makeSound();
    });
  }
}

const zoo = new Zoo();

const lion = new Mammal("사자", 5);
const eagle = new Bird("독수리", 3);
const shark = new Fish("상어", 8);

zoo.addAnimal(lion);
zoo.addAnimal(eagle);
zoo.addAnimal(shark);

zoo.allAnimalsAMakeSound();
