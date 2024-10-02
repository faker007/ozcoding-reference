async function* asyncGenerator() {
  yield "Hello";
  yield "Async";
  yield "World";
}

(async () => {
  for await (const word of asyncGenerator()) {
    console.log(word);
  }
})();
