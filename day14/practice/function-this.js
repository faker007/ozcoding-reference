const person = {
  name: "Gyejin",
  sayMyName: function () {
    console.log(this.name);
  },
};

person.sayMyName();
