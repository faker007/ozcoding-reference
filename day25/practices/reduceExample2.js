const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

const sumOfProducts = products.reduce((acc, curr) => acc + curr.price, 0);

console.log(sumOfProducts); // 1800
