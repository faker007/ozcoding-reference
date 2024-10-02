const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

promise
  .then((message) => {
    console.log(message); // 'Success!'
  })
  .catch((error) => {
    console.error(error);
  });
