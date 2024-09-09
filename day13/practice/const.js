const c = 10;

console.log(c); // 10

// c = 20; // TypeError: Assignment to constant variable.

const obj = { name: "John" };

obj.name = "Jane"; // 가능

console.log(obj.name); // 'Jane'

obj = { name: "Doe" }; // TypeError: Assignment to constant variable.
