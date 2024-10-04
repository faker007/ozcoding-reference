class Animal {
  makeSound() {
    console.log("Some sound...");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("냐용~");
  }
}

class Cow extends Animal {
  makeSound() {
    console.log("음메~");
  }
}

const animals = [new Animal(), new Cat(), new Cow()];

animals.forEach((animal) => {
  animal.makeSound();
});
