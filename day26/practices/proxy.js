const target = {
  message: "Hello, world!",
};

const handler = {
  get: function (obj, property) {
    if (property === "message") {
      return obj[property].toUpperCase();
    }

    return obj[property];
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.message);
