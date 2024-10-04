class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("왈왈...");
  }
}

const myDog = new Dog();

myDog.bark();
myDog.eat();
