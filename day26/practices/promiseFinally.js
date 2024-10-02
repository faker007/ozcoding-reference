fetch("https://api.example/data")
  .then((response) => response.json())
  .catch((error) => console.error(error))
  .finally(() => console.log("작업 완료"));
